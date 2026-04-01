"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast.success("¡Mensaje enviado con éxito!")
        form.reset()
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error de conexión. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-500 text-[10px] font-mono tracking-widest uppercase mb-4">
            Hablemos de ingeniería
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            ¿Tienes un <span className="text-blue-500">proyecto</span> en mente?
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-lg leading-relaxed">
            Hablemos sobre cómo puedo ayudarte a construir tu próxima visión digital con un stack moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-14 rounded-[48px] border border-zinc-800 bg-zinc-900 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Gradient background */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                  <p className="text-zinc-500 font-medium">Te responderé en menos de 24 horas.</p>
                </div>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-2xl px-8"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 flex items-center gap-2 px-1 uppercase tracking-widest font-mono">
                      <User size={14} className="text-blue-500" /> Nombre Completo
                    </label>
                    <Input
                      {...form.register("name")}
                      placeholder="Ej. Juan Pérez"
                      className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-16 rounded-2xl px-6 transition-all shadow-inner"
                    />
                    {form.formState.errors.name && (
                      <p className="text-xs font-medium text-red-500 px-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 flex items-center gap-2 px-1 uppercase tracking-widest font-mono">
                      <Mail size={14} className="text-blue-500" /> Correo Electrónico
                    </label>
                    <Input
                      {...form.register("email")}
                      placeholder="tu@email.com"
                      className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-16 rounded-2xl px-6 transition-all shadow-inner"
                    />
                    {form.formState.errors.email && (
                      <p className="text-xs font-medium text-red-500 px-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 flex items-center gap-2 px-1 uppercase tracking-widest font-mono">
                    <MessageSquare size={14} className="text-blue-500" /> Detalles del Proyecto
                  </label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Cuéntame sobre tu proyecto, objetivos técnicos y tiempos..."
                    className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-h-[180px] rounded-3xl px-6 py-4 resize-none transition-all leading-relaxed shadow-inner"
                  />
                  {form.formState.errors.message && (
                    <p className="text-xs font-medium text-red-500 px-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full h-18 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl text-lg font-black transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 group"
                >
                  {isSubmitting ? (
                    <div className="h-6 w-6 border-3 border-zinc-400 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
