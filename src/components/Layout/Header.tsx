"use client";
import Link from "next/link";
import React, { memo } from "react";

const Header = () => {
  return (
    <header>
      <h2>Open fm</h2>
      <nav>
        <ul>
          <li>
            <Link href='/muzyka'>muzyka</Link>
          </li>
          <li>
            <Link href='/radio'>radio</Link>
          </li>
          <li>
            <Link href='/podcasty'>podcasty</Link>
          </li>
          <li>
            <Link href='/aktualnosci'>aktualności</Link>
          </li>
          <li>
            <Link href='/ulubione'>ulubione</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
