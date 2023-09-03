import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prayan Foundation',
  description: 'Empowering Lives, Creating Hope',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#F3F4F6] w-full overflow-x-hidden overflow-y-auto `}>
          <Navbar />

          <div className='min-h-screen'>
            {children}
          </div>

          <Footer />
        </body>

      </html>
    </ClerkProvider>
  )
}
