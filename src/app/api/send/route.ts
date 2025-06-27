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

        const { nombre, telefono, emailDestino, honeypot } = parsed.data
        
        if(honeypot) {
            return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
        }

        // Determinar el email de destino - si no se especifica, usar el por defecto
        const emailFinal = emailDestino || process.env.EMAIL_USER

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
            subject: `📥 Nuevo mensaje de ${nombre}`,
            text: `
          Nombre: ${nombre}
          Teléfono: ${telefono}
          Enviado a: ${emailFinal}

            `,
            html: `
              <main style="font-family: Arial, sans-serif; color: #1a1a1a; background-color: #ffffff; padding: 24px;">
                <h1 style="font-size: 20px; color: #2c3e50;">📬 Nuevo mensaje desde el formulario de contacto</h1>
                <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tbody>
                    <tr>
                      <th scope="row" style="text-align: left; padding: 8px; background-color: #f0f0f0;">👤 Nombre</th>
                      <td style="padding: 8px;">${nombre}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="text-align: left; padding: 8px; background-color: #f0f0f0;">📱 Teléfono</th>
                      <td style="padding: 8px;"><a href="tel:${telefono}" style="color: #0066cc;">${telefono}</a></td>
                    </tr>
                    <tr>
                      <th scope="row" style="text-align: left; padding: 8px; background-color: #f0f0f0;">📧 Enviado a</th>
                      <td style="padding: 8px;">${emailFinal}</td>
                    </tr>
                  </tbody>
                </table>
                <footer style="margin-top: 30px; font-size: 12px; color: #666;">
                  Este mensaje fue enviado desde el sitio web de <strong>App Inaesthetics</strong>.
                </footer>
              </main>
            `
          });
          

        return NextResponse.json({ 
            success: true,
            message: `Email enviado correctamente a ${emailFinal}`
        })
    } catch (error) {
        console.error('Error al enviar el correo:', error)
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
    }
} 