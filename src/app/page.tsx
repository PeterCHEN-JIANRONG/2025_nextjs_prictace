"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)

  const list = [
    {
      name: 'peter',
      age: 20
    },
    {
      name: 'john',
      age: 25
    }
  ]

  const say = (str: string) => {
    console.log(`ih, my name is ${str}`);
  }

  return (<>
  <ul>
    {
      list.map((i)=><li key={i.age}>
        {i.name}
        <button type="button" onClick={() => say(i.name)} className="ml-4 p-1 bg-white text-black">sayHi</button>
      </li>)
    }
  </ul>
  </>)
}
