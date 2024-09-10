import { COLORS } from "@/constants/color.constants"
import { GanttChartSquare } from "lucide-react"
import Link from "next/link"
import { LogoutButton } from "./LogoutButton"
import { MENU } from "./menu.data"
import { MenuItem } from "./menuItem"

export function Sidebar() {
  return (
    <aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-between">
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 p-layout border-b border-b-border"
        >
          <GanttChartSquare color={COLORS.primary} size={38} />
          <span className="text-xl font-bold relative text-white">
            DEV PLANNER
            <span className="absolute -top-1 -right-4 text-xs opacity-40 rotate-[18deg] font-normal text-red-100">
              beta
            </span>
          </span>
        </Link>
        <div className="p-3 relative text-white">
          <LogoutButton />
          {MENU.map(item => (
            <MenuItem item={item} key={item.link} />
          ))}
        </div>
      </div>
      <footer className="text-xs opacity-40 font-normal text-center p-layout text-white">
        2024 &copy; With love from
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-brand-300 transition-colors"
        >
          <br />
          Dev project
        </a>
        . <br /> All rights reserved.
      </footer>
    </aside>
  )
}
