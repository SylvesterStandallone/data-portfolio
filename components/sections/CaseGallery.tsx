"use client"

/*
  Visor de las paginas de un dashboard. Renderiza el boton disparador y el
  overlay: el estado vive acá, Cases.tsx solo le pasa las imagenes.
  Se usa <img> plano a proposito: con images.unoptimized el next/image no
  aporta nada y las capturas no comparten un alto intrinseco.
*/

import { useCallback, useEffect, useRef, useState } from "react"

export type GalleryImage = { src: string; caption: string }

export type GalleryLabels = {
  viewGallery: string
  close: string
  prev: string
  next: string
  pageOf: string
}

export function CaseGallery({
  images,
  labels,
  title,
}: {
  images: readonly GalleryImage[]
  labels: GalleryLabels
  title: string
}) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  )

  useEffect(() => {
    if (!open) return

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }

    document.addEventListener("keydown", onKey)
    // El fondo no debe scrollear mientras el visor esta abierto.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, go])

  if (images.length === 0) return null

  const current = images[index]
  const counter = labels.pageOf.replace("{n}", String(index + 1)).replace("{total}", String(images.length))

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0)
          setOpen(true)
        }}
        className="mt-5 inline-flex items-center gap-2 rounded border border-border bg-background px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
      >
        {labels.viewGallery}
        <span className="text-primary">({images.length})</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex flex-col bg-background/95 p-4 backdrop-blur-sm md:p-8"
        >
          {/* Encabezado */}
          <div className="mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-foreground md:text-base">{title}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{counter}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label={labels.close}
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
              className="shrink-0 rounded border border-border bg-card px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              {labels.close}
            </button>
          </div>

          {/* Imagen + navegacion */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex w-full max-w-6xl min-h-0 flex-1 items-center gap-2 py-4 md:gap-4"
          >
            <button
              type="button"
              aria-label={labels.prev}
              onClick={() => go(-1)}
              className="shrink-0 rounded border border-border bg-card px-2 py-4 text-lg text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary md:px-3"
            >
              ‹
            </button>

            {/*
              El wrapper absorbe el espacio sobrante para que el borde abrace la imagen.
              El tope va en vh y no en %: con items-center el wrapper no se estira, asi
              que un max-h-full se resolveria contra la altura de la propia imagen y no
              limitaria nada, y en pantallas bajas se montaba sobre el epigrafe.
            */}
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <img
                src={current.src}
                alt={current.caption}
                className="max-h-[65vh] max-w-full rounded-lg border border-border object-contain"
              />
            </div>

            <button
              type="button"
              aria-label={labels.next}
              onClick={() => go(1)}
              className="shrink-0 rounded border border-border bg-card px-2 py-4 text-lg text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary md:px-3"
            >
              ›
            </button>
          </div>

          {/* Pie: epigrafe + puntos */}
          <div onClick={(e) => e.stopPropagation()} className="mx-auto w-full max-w-6xl shrink-0 text-center">
            <p className="mx-auto mb-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
              {current.caption}
            </p>
            <div className="flex justify-center gap-2">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={labels.pageOf.replace("{n}", String(i + 1)).replace("{total}", String(images.length))}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
