import '../index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AIChatbot from '../components/AIChatbot'

export const metadata = {
    title: 'Andhra Inspire Academy | Best Coaching in Vijayawada',
    description: 'Top rated coaching institute in Vijayawada for NEET, JEE, EAMCET and Intermediate Tuitions.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-slate-50 text-slate-800 font-sans">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <AIChatbot />
                </div>
            </body>
        </html>
    )
}
