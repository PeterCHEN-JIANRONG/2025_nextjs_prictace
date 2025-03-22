"use client";
import { useMemo, useRef, useState } from "react";
import axios from "axios";
import type { User } from "./types/user";
import UserCard from "./components/UserCard";

export default function Home() {
  const [list, setList] = useState<number[]>([1,2,3,4,5]);
  const list2 = useMemo(() => list.map((i) => i*2), [list])

  const inputRef = useRef<HTMLInputElement>(null)

  const [text, setText] = useState('')
  const handleChange = (e) => {
    const {value, name} = e.target
    setText(value)
  }

  const add = () => {
    const num = parseInt(text)
    console.log(num, typeof num);
    
    if (num < 0 || num > 100) {
      console.log('number must between 0 <= num <= 100');
      
      setText('')
      focus()
      return
    }
    setList([
      ...list,
      num
    ])
    setText('')
    focus()
  }
  
  const focus = () => {
    inputRef.current && inputRef.current.focus()
  }

  const handleKeyDown = (e) => {
    const {code} = e
    if (code === 'Enter') {
      add()
    }
    
  }
  return (
    <>
      <input type="text" name="number" value={text} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown}/>
      <button type="button" onClick={add}>增加</button>
      <p>{list.join(",")}</p>
      <p>{list2.join(",")}</p>
    </>
  );
}
