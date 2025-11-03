import Link from 'next/link';
import { Icons } from '@/components';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">viUit</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}