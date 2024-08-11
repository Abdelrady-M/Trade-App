import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}
export interface SidebarItems {
  links: Array<{
    label: string
    href: string
    icon?: LucideIcon
  }>
  extras?: ReactNode
}
