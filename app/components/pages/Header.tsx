import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-2 right-4 z-50">
      <ul className="flex gap-4">
        <li>
          <Link href="/scripts" className="text-blue-500 hover:underline">
            scripts
          </Link>
        </li>
        <li>
          <Link href="/images" className="text-blue-500 hover:underline">
            images
          </Link>
        </li>
        <li>
          <Link href="/fonts" className="text-blue-500 hover:underline">
            fonts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header