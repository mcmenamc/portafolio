import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // SMTP Configuration from provided keys
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'admin@hazfactura.com',
        pass: 'zZ9k#xZ*W!',
      },
      // Increase timeout for high-security SMTP servers
      connectionTimeout: 10000,
    })

    const mailOptions = {
      // Hostinger and many other providers require 'from' to be the SAME as the authenticated user 'admin@hazfactura.com'
      from: `"Portafolio MENA" <admin@hazfactura.com>`,
      to: 'jesus.mena.dev@gmail.com',
      replyTo: email, // This allows the user to reply directly to the person who filled the form
      subject: `Nueva oportunidad: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #09090b; font-family: 'Inter', Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #09090b; border: 1px solid #27272a; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
              
              <!-- Header -->
              <div style="padding: 40px 40px 20px 40px; text-align: center; background-image: linear-gradient(to bottom right, #1e1b4b, #09090b);">
                <div style="display: inline-block; padding: 8px 16px; background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; color: #3b82f6; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">
                  Nueva Oportunidad
                </div>
                <h1 style="margin-top: 24px; font-size: 32px; font-weight: 900; color: #ffffff; letter-spacing: -0.05em;">
                  MENA<span style="color: #3b82f6;">.</span>DEV
                </h1>
              </div>

              <!-- Content -->
              <div style="padding: 0 40px 40px 40px;">
                <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; padding: 32px; margin-top: 24px;">
                  
                  <div style="margin-bottom: 32px;">
                    <p style="margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; margin-bottom: 8px;">Información del Cliente</p>
                    <h3 style="margin: 0; font-size: 20px; font-weight: 700; color: #f4f4f5;">${name}</h3>
                    <a href="mailto:${email}" style="display: inline-block; margin-top: 8px; color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 14px;">${email}</a>
                  </div>

                  <div style="padding-top: 32px; border-top: 1px solid #27272a;">
                    <p style="margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; margin-bottom: 12px;">Detalles del Mensaje</p>
                    <div style="color: #a1a1aa; line-height: 1.8; font-size: 15px; white-space: pre-wrap;">
                      ${message}
                    </div>
                  </div>

                </div>

                <div style="margin-top: 40px; text-align: center;">
                  <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background-color: #3b82f6; border-radius: 16px; color: #ffffff; font-weight: 800; font-size: 14px; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);">
                    Responder al Cliente
                  </a>
                </div>

                <div style="margin-top: 48px; text-align: center; padding-top: 32px; border-top: 1px solid #18181b;">
                  <p style="margin: 0; font-size: 10px; color: #3f3f46; letter-spacing: 3px; text-transform: uppercase;">
                    &copy; ${new Date().getFullYear()} MENA ENGINEERING STUDIO
                  </p>
                </div>

              </div>
            </div>
          </body>
        </html>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('✅ Email enviado con éxito a admin@hazfactura.com')
    } catch (mailError: any) {
      console.error('❌ Error detallado de Nodemailer:', mailError)
      throw mailError
    }

    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json({ error: 'Fallo al enviar el email' }, { status: 500 })
  }
}
