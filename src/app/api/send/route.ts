import { ClientSchema } from '@/schemas'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    try {
        // Validate that the request has a body
        if (!req.body) {
            return NextResponse.json({ error: 'Request body is required' }, { status: 400 })
        }

        let body;
        try {
            body = await req.json()
        } catch {
            return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
        }

        const parsed = ClientSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json({ 
                error: 'Datos inválidos',
                details: parsed.error.errors 
            }, { status: 400 })
        }

        const { nombre, telefono, emailDestino, paginaOrigen, honeypot } = parsed.data
        
        if(honeypot) {
            return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
        }

        // Determinar el email de destino - si no se especifica, usar el por defecto
        const emailFinal = emailDestino || process.env.EMAIL_USER

        // Formatear información de la página origen
        const origenInfo = paginaOrigen || "Página no especificada"
        const fechaEnvio = new Date().toLocaleString('es-PE', {
            timeZone: 'America/Lima',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })

        // 📬 Configuración del transporte SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
        })

        // Enviar el correo
        await transporter.sendMail({
            from: `"Landing Web" <${process.env.EMAIL_USER}>`,
            to: emailFinal,
            subject: `🎯 LEAD RECIBIDO: ${nombre} desde ${origenInfo}`,
            text: `
          Nombre: ${nombre}
          Teléfono: ${telefono}
          Página de origen: ${origenInfo}
          Fecha y hora: ${fechaEnvio}
          Enviado a: ${emailFinal}

            `,
            html: `
              <main style="font-family: Arial, sans-serif; color: #1a1a1a; background-color: #ffffff; padding: 24px;">
                <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h1 style="font-size: 24px; color: #ffffff; margin: 0; text-align: center;">📬 Nuevo Lead Generado</h1>
                  <p style="color: #bdc3c7; text-align: center; margin: 5px 0 0 0; font-size: 14px;">Desde ${origenInfo}</p>
                </div>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 20px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                  <tbody>
                    <tr style="background-color: #f8f9fa;">
                      <th scope="row" style="text-align: left; padding: 15px; background-color: #3498db; color: white; font-weight: bold;">👤 Cliente</th>
                      <td style="padding: 15px; font-size: 16px; font-weight: bold; color: #2c3e50;">${nombre}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="text-align: left; padding: 15px; background-color: #2ecc71; color: white; font-weight: bold;">📱 Teléfono</th>
                      <td style="padding: 15px;"><a href="tel:${telefono}" style="color: #27ae60; text-decoration: none; font-weight: bold; font-size: 16px;">${telefono}</a></td>
                    </tr>
                    <tr style="background-color: #f8f9fa;">
                      <th scope="row" style="text-align: left; padding: 15px; background-color: #e74c3c; color: white; font-weight: bold;">🌐 Página Origen</th>
                      <td style="padding: 15px; font-weight: bold; color: #e74c3c;">${origenInfo}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="text-align: left; padding: 15px; background-color: #9b59b6; color: white; font-weight: bold;">⏰ Fecha y Hora</th>
                      <td style="padding: 15px; color: #8e44ad; font-weight: bold;">${fechaEnvio}</td>
                    </tr>
                    <tr style="background-color: #f8f9fa;">
                      <th scope="row" style="text-align: left; padding: 15px; background-color: #f39c12; color: white; font-weight: bold;">📧 Enviado a</th>
                      <td style="padding: 15px; color: #d68910; font-weight: bold;">${emailFinal}</td>
                    </tr>
                  </tbody>
                </table>
                
                <footer style="margin-top: 30px; font-size: 12px; color: #7f8c8d; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
                  Este mensaje fue enviado automáticamente desde <strong>App Inaesthetics</strong> • ${fechaEnvio}
                </footer>
              </main>
            `
          });
          

        return NextResponse.json({ 
            success: true,
            message: `Email enviado correctamente a ${emailFinal} desde ${origenInfo}`
        })
    } catch (error) {
        console.error('Error al enviar el correo:', error)
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
    }
} 