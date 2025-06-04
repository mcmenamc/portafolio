"use client"

import { motion, type Variants, type HTMLMotionProps } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type React from "react"

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  customVariants?: Variants
  once?: boolean
  amount?: number
  delay?: number
  staggerChildren?: number
  delayChildren?: number
  whileHoverScale?: number
  whileHoverY?: number
  whileHoverBoxShadow?: string
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedDiv({
  children,
  className,
  customVariants,
  once = true,
  amount = 0.2,
  delay = 0,
  staggerChildren,
  delayChildren,
  whileHoverScale,
  whileHoverY,
  whileHoverBoxShadow,
  ...props
}: AnimatedDivProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: amount,
  })

  const variantsToUse = customVariants || defaultVariants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { ...variantsToUse.hidden },
        visible: {
          ...variantsToUse.visible,
          transition: {
            delay,
            staggerChildren,
            delayChildren,
            duration: 0.6,
            ease: "easeOut",
            ...(variantsToUse.visible?.transition || {}),
          },
        },
      }}
      whileHover={
        whileHoverScale || whileHoverY || whileHoverBoxShadow
          ? {
              scale: whileHoverScale,
              y: whileHoverY,
              boxShadow: whileHoverBoxShadow,
            }
          : undefined
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
