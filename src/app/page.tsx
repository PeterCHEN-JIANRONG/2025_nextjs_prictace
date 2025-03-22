"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)

  interface User {
    name: string
    age: number
  }
  
  const ThemeContext = createContext<User>({
    name: 'peter',
    age: 20
  });

  const Header = (props: any) => {
    const {name, age} = useContext(ThemeContext);
    const click = () => {
      props.set({
        name: 'ho',
        age: 30
      })
    }
    return <div>
      我是 Header
      <p>{name} ---- {age}</p>
      <button type="button" onClick={click}>按我</button>
    </div>
  }
  const Content = (props:any) => {
    const {name, age} = useContext(ThemeContext);
    const click = () => {
      props.set({
        name: 'bubu',
        age: 40
      })
    }
    return <div>
      我是 Content
      <p>{age} === {name}</p>
      <button type="button" onClick={click}>按我</button>
    </div>
  }

  const [user, setUser] = useState<User>({
    name: '',
    age: 0
  })

  return (<>
    
    <ThemeContext.Provider value={user}>
      <Header set={setUser}/>
      <Content set={setUser}/>
    </ThemeContext.Provider>
  </>)
}
