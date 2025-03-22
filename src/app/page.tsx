"use client";
import { createContext, ReactNode, useContext, useRef, useState } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const click = () => {
    inputRef.current && inputRef.current.focus()
  }

  return (<>
    <input type="text"  ref={inputRef} />
    <button type="button" onClick={click}>點我</button>
  </>)
}
