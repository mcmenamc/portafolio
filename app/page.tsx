"use client" // Required for framer-motion and event handlers

import { CardContent } from "@/components/ui/card"
import { Toaster } from 'sonner';
import { FaWhatsapp } from "react-icons/fa";

import { CardDescription } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Menu,
  Sparkles,
  Database,
  Cloud,
  Cpu,
  Wrench,
  Smartphone,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { ContactFormServer } from "./components/contact-form-server"
import { AnimatedDiv } from "./components/animated-div"

const professionalObjective =
  "Apasionado por el desarrollo de soluciones tecnológicas, busco crecer como Full Stack Developer aplicando conocimientos en backend, frontend y servicios en la nube."

const experienceData = [
  {
    role: "Desarrollador Full Stack",
    company: "Posibilidades Software Progresivo",
    period: "2022 - 2025",
    responsibilities: [
      "Diseñar, desarrollar y mantener aplicaciones móviles y web.",
      "Crear APIs eficientes y documentadas para la comunicación entre frontend y backend.",
      "Modelar y administrar bases de datos, asegurando integridad y escalabilidad.",
      "Gestionar repositorios en GitHub y colaborar con otros desarrolladores.",
      "Implementar soluciones en la nube con AWS S3 y Firebase.",
      "Publicar y mantener aplicaciones en App Store y Google Play.",
      "Trabajar bajo objetivos definidos y cumplir con los tiempos de entrega establecidos.",
    ],
  },
  {
    role: "Desarrollador Backend",
    company: "Universidad Tecnológica de Puebla",
    period: "2021 - 2022",
    responsibilities: ["Desarrollador Full Stack.", "Administrador en base de datos."],
  },
]

const educationData = [
  {
    degree: "Ingeniería en Desarrollo y Gestión de Software",
    institution: "Universidad Tecnológica de Puebla",
    period: "2019 - 2021",
  },
]

const skillsData = [
  {
    category: "Desarrollo Móvil",
    icon: Smartphone,
    skills: [
      "Android (Android Studio, Google Play Console)",
      "iOS (Xcode, App Store Connect)",
      "Cross-platform: Flutter (Dart)",
    ],
  },
  {
    category: "Frontend",
    icon: Code,
    skills: [
      "Frameworks: React.js + Next.js, Vue.js",
      "Estilos: Tailwind CSS + shadcn/ui, Bootstrap 5, MUI (Material-UI), Vuetify (Vue)",
    ],
  },
  {
    category: "Backend",
    icon: Cpu,
    skills: [
      "Lenguajes: JavaScript (Node.js), C# (.NET/.NET Core), PHP (Laravel, CodeIgniter), Python",
      "APIs: RESTful, GraphQL, WebSockets",
    ],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    skills: [
      "SQL: MySQL, PostgreSQL, SQL Server, MariaDB",
      "NoSQL: MongoDB, Firebase (Firestore, Realtime DB)",
      "ORM/ODM: Entity Framework (.NET), Mongoose (MongoDB)",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS: EC2, S3, Lambda, RDS, CloudFront",
      "Firebase: Authentication, Cloud Messaging (Push), Firestore, Functions",
      "Azure: App Services",
      "CI/CD: GitHub Actions, Docker básico",
    ],
  },
  {
    category: "Inteligencia Artificial",
    icon: Sparkles,
    skills: ["APIs: OpenAI (GPT), Google Gemini, Vertex AI"],
  },
  {
    category: "Herramientas",
    icon: Wrench,
    skills: [
      "Control de Versiones: Git, GitHub",
      "IDEs: VS Code, Android Studio, Xcode",
      "Metodologías: Scrum",
      "Otros: Postman (APIs), Figma (básico), Jira",
    ],
  },
]

const SectionTitle = ({
  title,
  icon: Icon,
}: {
  title: string
  icon?: React.ElementType
}) => (
  <AnimatedDiv
    className="flex items-center mb-8"
    customVariants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} // Reducido y a 20
  >
    {Icon && <Icon className="h-8 w-8 mr-3 text-primary" />}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
  </AnimatedDiv>
)

export default function PortfolioPage() {
  const navLinks = [
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Escolaridad" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contacto" },
  ]

  const heroTextVariants = {
    hidden: { opacity: 0, y: 10 }, // Reducido y a 10
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Reducido delay
        duration: 0.4, // Reducida duración
        ease: "easeOut",
      },
    }),
  }

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Aumentado scale a 0.9
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4, // Ajustado delay
        duration: 0.5, // Reducida duración
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
          <Toaster />

      <motion.header
        initial={{ y: -60, opacity: 0 }} // Reducido y para entrada más sutil
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }} // Reducida duración
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#hero" className="font-bold text-xl hover:text-primary transition-colors">
            {/* Jesús Antonio Mena  */}
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/mcmenamc" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú de navegación</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link href="#hero" className="text-lg font-medium hover:text-primary transition-colors">
                    Inicio
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="outline" asChild className="mt-4">
                    <Link href="https://github.com/mcmenamc" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        <section
          id="hero"
          className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background overflow-hidden"
        >
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <motion.h1
                  custom={0}
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                >
                  JESÚS ANTONIO
                  <br />
                  MENA DE LA ROSA
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl font-semibold text-primary"
                >
                  DESARROLLADOR FULL STACK
                </motion.p>
                <motion.p
                  custom={2}
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg text-muted-foreground max-w-prose"
                >
                  {professionalObjective}
                </motion.p>
                <motion.div
                  custom={3}
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  <Button size="lg" asChild>
                    <Link href="#experience">
                      Ver Experiencia <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#contact">Contáctame</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                variants={heroImageVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center"
              >
                <Image
                  src="/foto.jpg"
                  width={350}
                  height={350}
                  alt="Jesús Antonio Mena De La Rosa"
                  className="rounded-full shadow-xl aspect-square object-cover border-4 border-primary/20"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Experiencia Laboral" icon={Briefcase} />
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <AnimatedDiv
                  key={index}
                  customVariants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} // Simplificada animación
                  delay={index * 0.15} // Reducido delay
                  className="rounded-lg overflow-hidden"
                >
                  <Card className="overflow-hidden shadow-lg h-full">
                    <CardHeader className="bg-muted/50 p-6">
                      <CardTitle className="text-2xl font-semibold">{exp.role}</CardTitle>
                      <CardDescription className="text-md text-muted-foreground">
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Escolaridad" icon={GraduationCap} />
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {educationData.map((edu, index) => (
                <AnimatedDiv
                  key={index}
                  customVariants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} // Simplificada animación
                  delay={index * 0.15} // Reducido delay
                  className="rounded-lg overflow-hidden"
                >
                  <Card className="shadow-lg h-full">
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-semibold">{edu.degree}</CardTitle>
                      <CardDescription className="text-md text-muted-foreground mt-1">
                        {edu.institution}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                    </CardHeader>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Habilidades Técnicas" icon={Code} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skillCategory, index) => (
                <AnimatedDiv
                  key={index}
                  customVariants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} // Simplificada animación
                  delay={index * 0.1} // Reducido delay
                  className="rounded-lg overflow-hidden flex flex-col"
                >
                  <Card className="shadow-lg flex flex-col flex-grow h-full">
                    <CardHeader className="flex flex-row items-center gap-3 p-4 bg-muted/50">
                      <skillCategory.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg font-semibold">{skillCategory.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-sm py-1 px-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Ponte en Contacto" icon={Mail} />
            <AnimatedDiv customVariants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} staggerChildren={0.15}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <AnimatedDiv
                  customVariants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} // Reducido x
                  className="space-y-6"
                >
                  <p className="text-lg text-muted-foreground">
                    {
                      "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones. No dudes en contactarme usando el formulario o mis datos de contacto a continuación."
                    }
                  </p>
                  <div className="space-y-4">
                    <Link href="tel:+525659909246" className="flex items-center gap-3 group">
                      <Phone className="h-5 w-5 text-primary group-hover:scale-105 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        (565) 990 92 46
                      </span>
                    </Link>
                    {/* whatapp */}
                    <Link href="https://wa.me/525659909246" className="flex items-center gap-3 group">
                      <FaWhatsapp className="h-5 w-5 text-primary group-hover:scale-105 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        (565) 990 92 46
                      </span>
                    </Link>
                    <Link href="mailto:jesus.mena.dev@gmail.com" className="flex items-center gap-3 group">
                      <Mail className="h-5 w-5 text-primary group-hover:scale-105 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        jesus.mena.dev@gmail.com
                      </span>
                    </Link>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover:scale-105 transition-transform" />
                      <span className="text-muted-foreground">
                        Av 102 Pte 114, Revolución Mexicana,
                        <br />
                        72200 Puebla, Pue., México
                      </span>
                    </div>
                    <Link
                      href="https://github.com/mcmenamc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <Github className="h-5 w-5 text-primary group-hover:scale-105 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        github.com/mcmenamc
                      </span>
                    </Link>
                  </div>
                </AnimatedDiv>
                <AnimatedDiv customVariants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                  {" "}
                  {/* Reducido x */}
                  <Card className="p-6 sm:p-8 shadow-xl">
                    <ContactFormServer />
                  </Card>
                </AnimatedDiv>
              </div>
            </AnimatedDiv>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jesús Antonio Mena De La Rosa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
