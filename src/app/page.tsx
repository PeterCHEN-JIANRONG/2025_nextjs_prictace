"use client";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import type { User } from "./types/user";
import UserCard from "./components/UserCard";


export default function Home() {
  const [list, setList] = useState<User[]>([])

  const getUser = async () => {
    try {

      const params = {
        results: 4,
        nat: 'us,dk,fr,gb'
      }
      const { data } = await axios('https://randomuser.me/api/',{params})
      console.log(data);
      setList(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  const userList = list.map((user) => <li key={user.email}>
      <UserCard data={user} />
    </li>)

  useEffect(() => {
    getUser()
  },[])

  return (<>
    <h1>人物列表</h1>
    <ul className="space-y-2">
      {userList}
    </ul>
  </>)
}
