"use client"

import {
  BarChart,
  Bell,
  Bookmark,
  DollarSign,
  Home,
  LayoutDashboard,
  List,
  Mail,
  MoreHorizontal,
  Newspaper,
  User,
  Users,
} from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { SidebarItems } from "@/types/nav"

import { SidebarButton } from "./sidebar-button"
import { SidebarDesktop } from "./sidebar-desktop"
import { SidebarMobile } from "./sidebar-mobile"

const sidebarItems: SidebarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    { label: "Charts", href: "/item/notifications", icon: BarChart },
    { label: "Markets", href: "/item/messages", icon: DollarSign },
    {
      href: "/item/lists",
      icon: Newspaper,
      label: "News",
    },
    {
      href: "/item/bookmarks",
      icon: Bookmark,
      label: "Swap",
    },
    {
      href: "/item/communities",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      href: "/item/profile",
      icon: User,
      label: "Profile",
    },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton>
      <SidebarButton className="w-full justify-center " variant="default">
        Account
      </SidebarButton>
    </div>
  ),
}

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  })

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />
  }

  return <SidebarMobile sidebarItems={sidebarItems} />
}
