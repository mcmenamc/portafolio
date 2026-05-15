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
    <section id="contact" className="py-24 bg-zinc-50/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase mb-2">
            Hablemos de ingeniería
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 leading-none">
            ¿Tienes un <span className="text-blue-600">proyecto</span><br/>en mente?
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm font-medium leading-relaxed">
            Construyamos soluciones digitales de alto rendimiento con arquitectura escalable.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] border border-zinc-100 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[100px] -z-10" />

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-zinc-900">¡Mensaje Enviado!</h3>
                  <p className="text-zinc-500 text-base font-medium">Te responderé en menos de 24 horas.</p>
                </div>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-xl px-8 h-12 font-black uppercase tracking-widest text-[9px]"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-zinc-400 flex items-center gap-2 px-1 uppercase tracking-[0.2em]">
                      <User size={12} className="text-blue-600" /> Nombre Completo
                    </label>
                    <Input
                      {...form.register("name")}
                      placeholder="Ej. Jesús Mena"
                      className="bg-zinc-50 border-zinc-100 text-zinc-900 placeholder:text-zinc-300 focus:ring-0 focus:border-blue-600 h-14 rounded-2xl px-6 transition-all font-bold text-base"
                    />
                    {form.formState.errors.name && (
                      <p className="text-[10px] font-black text-red-500 px-1 uppercase tracking-widest">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-zinc-400 flex items-center gap-2 px-1 uppercase tracking-[0.2em]">
                      <Mail size={12} className="text-blue-600" /> Correo Electrónico
                    </label>
                    <Input
                      {...form.register("email")}
                      placeholder="tu@email.com"
                      className="bg-zinc-50 border-zinc-100 text-zinc-900 placeholder:text-zinc-300 focus:ring-0 focus:border-blue-600 h-14 rounded-2xl px-6 transition-all font-bold text-base"
                    />
                    {form.formState.errors.email && (
                      <p className="text-[10px] font-black text-red-500 px-1 uppercase tracking-widest">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] font-black text-zinc-400 flex items-center gap-2 px-1 uppercase tracking-[0.2em]">
                    <MessageSquare size={12} className="text-blue-600" /> Detalles del Proyecto
                  </label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="bg-zinc-50 border-zinc-100 text-zinc-900 placeholder:text-zinc-300 focus:ring-0 focus:border-blue-600 min-h-[160px] rounded-2xl px-6 py-5 resize-none transition-all font-bold text-base leading-relaxed"
                  />
                  {form.formState.errors.message && (
                    <p className="text-[10px] font-black text-red-500 px-1 uppercase tracking-widest">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 group"
                >
                  {isSubmitting ? (
                    <div className="h-6 w-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
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
