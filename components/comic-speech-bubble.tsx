import type React from "react"

interface ComicSpeechBubbleProps {
  children: React.ReactNode
  position?: "left" | "right"
  type?: "speech" | "thought"
  className?: string
}

export function ComicSpeechBubble({
  children,
  position = "left",
  type = "speech",
  className = "",
}: ComicSpeechBubbleProps) {
  return (
    <div
      className={`relative p-4 rounded-lg ${
        type === "speech" ? "rounded-tl-none" : "rounded-lg"
      } bg-yellow-400 text-blue-950 font-medium ${position === "left" ? "ml-4" : "mr-4"} ${className}`}
    >
      {type === "speech" && position === "left" && (
        <div className="absolute -left-4 top-0 w-0 h-0 border-t-[12px] border-r-[16px] border-b-0 border-l-0 border-yellow-400" />
      )}
      {type === "speech" && position === "right" && (
        <div className="absolute -right-4 top-0 w-0 h-0 border-t-[12px] border-l-[16px] border-b-0 border-r-0 border-yellow-400" />
      )}
      {type === "thought" && (
        <div className="absolute -top-2 -left-2 flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
        </div>
      )}
      {children}
    </div>
  )
}
