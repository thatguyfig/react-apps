import Link from "next/link";

export default function Header() {
    return (
        <header className="py-6">
        <nav className="flex space-x-4">
            <Link href="/">
                    <a>Home</a>

        </Link>
        <Link href="/posts">
            <a>Posts</a>
        </Link>
        </nav>

        </header>
    )
}