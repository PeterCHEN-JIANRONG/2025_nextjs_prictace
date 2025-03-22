"use client";
import { ReactNode, useState } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)
  

  const Card = (props: {children?: ReactNode}) => {
    return (<div className="p-2 bg-white border-2 border-blue-500 text-black">
      <h1>我是卡片</h1>
      { props.children }
    </div>)
  }

  return (<>
    <Card >
      <p className="text-sm italic">子元素</p>
    </Card>
    <Card >
      <p className="text-xl font-bold">子元素2</p>
    </Card>
    <Card />
  </>)
}
