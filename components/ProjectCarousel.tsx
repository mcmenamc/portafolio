"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ProjectCarousel({ images, title }: { images: string[], title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] min-w-0 aspect-video overflow-hidden" key={index}>
              <Image
                src={src}
                alt={`${title} snapshot ${index + 1}`}
                fill
                className="object-cover opacity-80 group-hover/carousel:opacity-100 transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-zinc-800 shadow-xl z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-zinc-800 shadow-xl z-20"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-blue-500 scale-125 w-4" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
