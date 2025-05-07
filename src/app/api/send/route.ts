import { ClientSchema2 } from '@/schemas'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

console.log("ENV DEBUG -->", {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const parsed = ClientSchema2.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
        }

        const { nombre, correo, telefono, mensaje, honeypot } = parsed.data
        
        if(honeypot) {
            return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
        }


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
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${nombre}`,
            text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje:\n${mensaje}`,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error al enviar el correo:', error)
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
    }
}
