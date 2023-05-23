import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

  export const metadata = {
    title: 'Japan Info',
    description: 'Created as a school project, this website is a collection of information about Japan.',
  }


  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
}
