"use client"

import { ThemeColorToggle } from "./ui/theme-color-toggle"
import { ThemeModeToggle } from "./ui/theme-mode-toggle"

export default function ThemeDisplay() {
    return (
        <div className="flex justify-start items-center">
        <ThemeColorToggle />
        <ThemeModeToggle />
        </div>
    )
}