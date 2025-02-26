"use client"

import { ThemeColorToggle } from "./ui/theme-color-toggle"
import { ThemeModeToggle } from "./ui/theme-mode-toggle"

export default function ThemeDisplay() {
    return (
        <div className="flex justify-start items-center gap-2 my-2 p-2">
        <ThemeColorToggle />
        <ThemeModeToggle />
        </div>
    )
}