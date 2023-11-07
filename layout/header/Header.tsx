import Link from "next/link";
import { header_desktopCss } from "./headerCss";

export default function Header() {
  return (
    <header>
      <style
        dangerouslySetInnerHTML={{
          __html: header_desktopCss,
        }}
      />
      <Link href="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
        Logo
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/" style={{ fontSize: "18px", fontWeight: "bold" }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ fontSize: "18px", fontWeight: "bold" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ fontSize: "18px", fontWeight: "bold" }}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{ fontSize: "18px", fontWeight: "bold" }}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/Login">
          <button className="header-button" style={{ fontSize: "18px", fontWeight: "bold" }}>
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="header-button1" style={{ fontSize: "18px", fontWeight: "bold" }}>
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
