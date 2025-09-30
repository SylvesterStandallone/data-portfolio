"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: string[]
  initialIndex: number
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex, alt, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isOpen, images.length])

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain cursor-pointer"
          onClick={goToNext}
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
