import { GeistMono } from 'geist/font/mono'
import "./globals.css"

export const metadata = {
  title: "Dhruv",
  description: "Tech Geek & Engineering Student",
  icons: {
    icon: 'https://i.imgur.com/c19AS0w.jpg',
    shortcut: 'https://i.imgur.com/c19AS0w.jpg',
    apple: 'https://i.imgur.com/c19AS0w.jpg',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  )
}



import './globals.css'