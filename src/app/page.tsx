"use client";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  name: {
    title: 'Ms' | 'Mr'
    first: string
    last: string
  }
  email: string
  phone: string
  gender: 'female' | 'male'
}

export default function Home() {
  const [user, setUser] = useState<User>()

  const getUser = async () => {
    try {
      const { data } = await axios('https://randomuser.me/api/')
      console.log(data);
      setUser(data.results[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  },[])

  return (<>
    <h1>{user?.name.title} {user?.name.last} {user?.name.first}</h1>
    <p>{user?.email}</p>
    <p>{user?.phone}</p>
  </>)
}
