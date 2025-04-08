import Link from "next/link";

export default function header() {
  return (
    <header>
        <h1>altari</h1>
        <nav className="flex">
            <li><Link href={`/`}>home</Link></li>
            <li><Link href={`/about`}>about</Link></li>
            <li><Link href={`/posts`}>posts</Link></li>
            <li><Link href={`/contact`}>contact</Link></li>
        </nav>
    </header>
  );
}
