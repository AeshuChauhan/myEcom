import Link from "next/link";
import { header_desktopCss } from "./headerCss";


export default function Header() {

    return (
        <header>
            <style
                dangerouslySetInnerHTML={{
                    __html: header_desktopCss
                }}
            />
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/about">About Us</Link></li>
                    <li> <Link href="/services">Services</Link></li>
                    <li> <Link href="/contact">Contact us</Link></li>
                </ul>
            </nav>
            <div>
                <button className="header-button">Sign In</button>
                <button className="header-button1">Sign Up</button>
            </div>
        </header>
    )
}
