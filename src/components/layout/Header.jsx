import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Resplast
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link href="/about" className="hover:text-brand-red transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-brand-red transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-brand-red transition">
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-red transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
