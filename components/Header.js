import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white header-shadow p-4 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-bhBlue flex items-center gap-2">
          <span className="bg-bhBlue text-white px-2 py-1 rounded">BH</span>
          Black Haven
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-bhBlue">Home</Link>
          <Link href="/pricing" className="hover:text-bhBlue">Pricing</Link>
          <Link href="/store" className="hover:text-bhBlue">Store</Link>
          <Link href="/support" className="hover:text-bhBlue">Support</Link>
        </nav>
      </div>
    </header>
  );
}