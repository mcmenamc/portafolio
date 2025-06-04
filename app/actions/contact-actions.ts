"use server"

import dbConnect from "@/lib/dbConnect"
import Message from "@/models/Message"
import { z } from "zod"

// Define Zod schema for validation
const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre no puede exceder los 100 caracteres."),
  email: z.string().email("Por favor, introduce una dirección de correo electrónico válida."),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(1000, "El mensaje no puede exceder los 1000 caracteres."),
})

export interface FormState {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    database?: string
  }
  success: boolean
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  }

  const validatedFields = ContactFormSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revisa los campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  try {
    await dbConnect()

    const newMessage = new Message({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      message: validatedFields.data.message,
    })

    await newMessage.save()

    return {
      message: "¡Mensaje enviado con éxito! Gracias por contactarnos.",
      success: true,
    }
  } catch (error: any) {
    console.error("Error al guardar el mensaje:", error)
    let errorMessage = "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
    if (error.name === "MongoNetworkError") {
      errorMessage = "Error de conexión con la base de datos. Por favor, inténtalo de nuevo más tarde."
    } else if (error.name === "ValidationError") {
      // This case should ideally be caught by Zod, but as a fallback
      errorMessage = "Error de validación de datos. Por favor, revisa los campos."
    }

    return {
      message: errorMessage,
      errors: {
        database: errorMessage,
      },
      success: false,
    }
  }
}
