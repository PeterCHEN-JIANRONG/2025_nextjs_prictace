"use client";

import { useReducer, useRef, useState } from "react";


interface Counter {
  count: number
}

interface CounterAction {
  type: 'add' | 'reduce',
  number: number
}

const reducer = (state: Counter, action: CounterAction) => {
  const {type, number} = action
  console.log(action)
  if (type === 'add') {
    return {
      count: state.count + number
    }
  }
  if (type === 'reduce') {
    return {
      count: state.count - number
    }
  }

  throw Error('Unknown action.');
}

export default function Counter() {

  const change = (e: {target: HTMLInputElement}) => {
    const {value} = e.target
    setNumber(parseInt(value) || 0)
  }

  const [number, setNumber] = useState<number>(0)
  const [counter, dispatch] = useReducer(reducer, {count: 0})
  const add = () => {
    dispatch({type: 'add', number})
    setNumber(0)
    focus()
  }
  const reduce = () => {
    dispatch({type: 'reduce', number})
    setNumber(0)
    focus()
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const focus = () => {
    inputRef.current && inputRef.current.focus()
  }

  return (
    <>
      <p className="text-3xl font-bold">{counter.count}</p>
      <div>
        <input type="text" name="count" id="count" value={number} onChange={change} ref={inputRef} />
        <button type="button" onClick={add}>增加</button>
        <button type="button" onClick={reduce}>減少</button>
      </div>
    </>
  );
}
