import React, { useState, useEffect } from "react";
import Link from "next/link";
import { header_desktopCss } from "./headerCss";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setLoggedIn(true);
      setUserName(parsedUserData.firstName);
    } else {
      setLoggedIn(false);
      setUserName("");
    }
  }, [loggedIn, userName]);

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
          {loggedIn && (
            <li>
              <Link href="/mandap" style={{ fontSize: "18px", fontWeight: "bold" }}>
                Add new Mandap
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        {loggedIn ? (
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: "18px", fontWeight: "bold", marginRight: '10px' }}>Welcome, {userName}!</p>
            <button
              className="header-button"
              style={{ fontSize: "18px", fontWeight: "bold" }}
              onClick={() => {
                setLoggedIn(false);
                setUserName("");
                sessionStorage.removeItem("userData");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
