"use client"
import { useFormStatus } from "react-dom"
import { useActionState, useState } from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from 'sonner';
import { submitContactForm, type FormState } from "@/app/actions/contact-actions"
import { Send, Loader2 } from "lucide-react"


const initialState: FormState = {
  message: "",
  errors: {},
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          Enviar Mensaje
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

export function ContactFormServer() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  // Manejador de cambios para actualizar el estado local
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
        // Si el envío fue exitoso, limpiamos el formulario
        setFormData({
          name: "",
          email: "",
          message: ""
        })
      } else {
        toast.error(state.message || "Ocurrió un error.")
      }
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-medium">
          Nombre Completo
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1.5"
          placeholder="Ej: Juan Pérez"
          aria-describedby="name-error"
          value={formData.name} // Controlamos el valor del input
          onChange={handleChange} // Manejamos los cambios
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-red-500 mt-1">
            {state.errors.name.join(", ")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-medium">
          Correo Electrónico
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5"
          placeholder="Ej: juan.perez@example.com"
          aria-describedby="email-error"
          value={formData.email}
          onChange={handleChange}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-red-500 mt-1">
            {state.errors.email.join(", ")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-medium">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5"
          placeholder="Escriba su mensaje aquí..."
          aria-describedby="message-error"
          value={formData.message}
          onChange={handleChange}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-red-500 mt-1">
            {state.errors.message.join(", ")}
          </p>
        )}
      </div>

      {/* Eliminamos los campos ocultos ya que los inputs están controlados por el estado formData */}

      {state.errors?.database && (
        <p className="text-sm text-red-500 mt-1">Error del servidor: {state.errors.database}</p>
      )}

      <SubmitButton />
    </form>
  )
}
