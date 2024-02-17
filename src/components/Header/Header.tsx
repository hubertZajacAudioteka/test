"use client";
import Link from "next/link";
import React, { memo } from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Open fm</h2>
      <nav>
        <ul className={styles.menu}>
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
