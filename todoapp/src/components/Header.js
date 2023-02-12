import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  let storedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');

  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  }

  const themeHandler = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles['header__title']}>TODO</h1>
      <button
        type="button"
        onClick={themeHandler}
        className={styles['header__theme-switcher']}></button>
    </header>
  );
}
