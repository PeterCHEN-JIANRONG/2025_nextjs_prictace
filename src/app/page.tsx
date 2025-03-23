"use client";

import { createContext, MouseEvent, useContext, useState } from "react";
import { ThemeContext, useGetTheme } from "./contexts/all";
import type { Theme } from "./contexts/all";

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>("light");

  const themeList: Theme[] = ["dark", "light", "system"];
  const click = (e: MouseEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.value as Theme)
  }

  const ButtonList = themeList.map((theme) => {
    return (
      <input
        type="button"
        className="py-1 px-2 bg-blue-500 cursor-pointer hover:bg-blue-400 rounded"
        value={theme}
        onClick={click}
      />
    );
  });

  return (
    <>
      <div className="space-x-2 mb-2">
        {ButtonList}
      </div>
      <ThemeContext.Provider value={theme}>
        <MyComponent1 />
        <MyComponent2 />
      </ThemeContext.Provider>
    </>
  );
}

function MyComponent1() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Component 1 Current theme: {theme}</p>
    </div>
  );
}
function MyComponent2() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Component 2 Current theme: {theme}</p>
    </div>
  );
}
