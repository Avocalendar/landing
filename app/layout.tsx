import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SiteHeader />
            <div className="relative flex min-h-screen flex-col py-20 lg:py-0 md:py-0 sm:py-20">
              <div className="flex-1">{children}</div>

              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
                )}
              />
            </div>

            <span className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              Template de{" "}
              <Link href="https://www.easyui.pro/ez-waitlist">
                https://www.easyui.pro/ez-waitlist
              </Link>
            </span>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
