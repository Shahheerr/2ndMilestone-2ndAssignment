import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex justify-center space-x-8">
                    <li><Link href="/" className="text-purple-600 hover:text-pink-500 font-semibold transition duration-300">Home</Link></li>
                    <li><Link href="/about" className="text-purple-600 hover:text-pink-500 font-semibold transition duration-300">About</Link></li>
                    <li><Link href="/contact" className="text-purple-600 hover:text-pink-500 font-semibold transition duration-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

