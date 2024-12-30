"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: Home,
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Home,
  },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link
              href={item.url}
              className={clsx({
                "bg-sky-100 text-blue-600": pathname === item.url,
              })}
            >
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
