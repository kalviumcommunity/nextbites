import Link from "next/link";

// Shared nav, rendered once in the layout so every page has it.
export default function NavBar() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span className="brand-mark">🍴</span> NextBites
      </Link>
      <nav className="nav-links">
        <Link href="/">Recipes</Link>
        <a
          href="https://github.com/kalviumcommunity/nextbites"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
