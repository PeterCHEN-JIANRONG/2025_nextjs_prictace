"use client";
import { useContext, useMemo, useRef, useState } from "react";
import axios from "axios";
import type { User } from "./types/user";
import UserCard from "./components/UserCard";
import { ThemeContext } from "./contexts/all";
import classNames from "classnames";

const MyCard1 = () => {
  const theme = useContext(ThemeContext);
  return <>
    <div className={classNames('p-2 w-[200px]',{
      'bg-black text-white': theme === 'dark',
      'bg-white text-black': theme === 'light',
    })}>
      MyCard1: {theme}
    </div>
  </>
}

const MyCard2 = () => {
  const theme = useContext(ThemeContext);
  return <>
    <div className={classNames('p-2 w-[200px]',{
      'bg-black text-white': theme === 'dark',
      'bg-white text-black': theme === 'light',
    })}>
      MyCard2: {theme}
    </div>
  </>
}

export default function Home() {

  const [theme, setTheme] = useState('dark');
  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }
  return (
    <>
      <button type="button" onClick={changeTheme}>改變主題</button>
      <ThemeContext.Provider value={theme}>
        <MyCard1 />
        <MyCard2 />
      </ThemeContext.Provider>
    </>
  );
}
