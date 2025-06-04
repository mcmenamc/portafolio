"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulación de llamada a API / server action
    console.log("Formulario enviado:", formData)
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarte, Jesús se comunicará contigo pronto.",
    })
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-medium">
          Tu Nombre
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div>
        <Label htmlFor="email" className="font-medium">
          Tu Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div>
        <Label htmlFor="message" className="font-medium">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="mt-2"
          placeholder="¿Cómo puede ayudarte Jesús?"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
