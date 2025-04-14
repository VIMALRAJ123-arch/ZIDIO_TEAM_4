"use client"

import { useState } from "react"
import Image from "next/image"

interface AvatarOption {
  id: number
  src: string
  alt: string
}

interface AvatarSelectorProps {
  options: AvatarOption[]
  defaultSelected?: number
  onSelect?: (id: number) => void
}

export function AvatarSelector({ options, defaultSelected = 1, onSelect }: AvatarSelectorProps) {
  const [selectedId, setSelectedId] = useState(defaultSelected)

  const handleSelect = (id: number) => {
    setSelectedId(id)
    if (onSelect) {
      onSelect(id)
    }
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {options.map((option) => (
        <div key={option.id} className="relative cursor-pointer group" onClick={() => handleSelect(option.id)}>
          <div
            className={`w-full aspect-square rounded-full overflow-hidden border-2 transition-all transform ${
              selectedId === option.id ? "border-yellow-400 scale-105" : "border-transparent hover:border-blue-400"
            }`}
          >
            <Image src={option.src || "/placeholder-logo.jpg"} alt={option.alt} fill className="object-cover" />
          </div>
          {selectedId === option.id && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-950"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
