"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "./ImageLightbox"

interface ImageSliderProps {
  images: string[]
  alt: string
}

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handleImageClick = () => {
    setIsLightboxOpen(true)
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl flex items-center justify-center border border-accent/20">
        <div className="text-accent/60">No images available</div>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-48 rounded-xl overflow-hidden group">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-300 cursor-pointer hover:opacity-90"
            onClick={handleImageClick}
          />

          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Navigation arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={currentIndex}
        alt={alt}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  )
}
