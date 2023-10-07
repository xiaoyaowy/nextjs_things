import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import Sidebar from "@/app/sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '你好~',
  description: 'my first nextJs project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/*<Sidebar />*/}
        {children}
      </body>
    </html>
  )
}
