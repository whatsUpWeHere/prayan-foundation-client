import Footer from '@/components/Footer'
import AppNavbar from '@/components/Navbar1'
import '../globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ContextProvider } from '@/context/StateContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prayan Foundation',
  description: 'Empowering Lives, Creating Hope',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ContextProvider>
          <body className={`${inter.className} bg-[#F3F4F6] w-full overflow-x-hidden overflow-y-auto `}>
            <AppNavbar />

            <div className='min-h-screen'>
              {children}
            </div>

            <Footer />
          </body>
        </ContextProvider>

      </html>
    </ClerkProvider>
  )
}
