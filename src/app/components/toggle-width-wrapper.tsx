"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { FiMaximize, FiMinimize } from "react-icons/fi"
import { Tooltip } from "./ui/tooltip"
import { TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip"

const ToggleWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [fullWidth, setFullWidth] = useState(false)

  const containerClass = cn("w-full border transition-all duration-300", fullWidth ? "xl:w-full" : "w-[1440px]")

  return (
    <div className={containerClass}>
      {children}

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn(
              "fixed bottom-6 right-6 z-50 size-8 items-center justify-center rounded-full bg-black text-white shadow-lg",
              "hidden xl:flex",
            )}
            onClick={() => setFullWidth((w) => !w)}>
            {fullWidth ? <FiMinimize size={16} /> : <FiMaximize size={16} />}
          </button>
        </TooltipTrigger>

        <TooltipContent align="end">{fullWidth ? "Set 1440px Width" : "Set Full Width"}</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default ToggleWidthWrapper
