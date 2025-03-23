"use client";

import { ChangeEvent, useReducer, useState } from "react";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "set"; value: State["count"] }

const initialState: State = { count: 0 };
const countReducer = (state: State, action: CounterAction): State => {
  switch(action.type) {
    case 'reset':
      return initialState
    case 'set':
      return {
        ...state,
        count: action.value
      }
    default:
      throw new Error('Unknown action')
  }
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value as string;
    setCount(parseInt(num) || 0);
  };

  const [counter, counterDispatch] = useReducer(countReducer, initialState);
  const reset = () => {
    counterDispatch({type: 'reset'})
  }
  const add = () => {
    counterDispatch({type: 'set', value: counter.count + count})
  }
  const reduce = () => {
    counterDispatch({type: 'set', value: counter.count - count})
  }

  return (
    <>
      <h1 className="text-3xl font-bold">useReducer practice</h1>
      <p className="text-2xl font-bold h-12">{counter.count}</p>
      <div className="space-x-2">
        <input type="text" name="count" value={count} onChange={change} />
        <input type="button" value="reset" onClick={reset} className="bg-blue-500 py-1 px-2 rounded cursor-pointer hover:bg-blue-400" />
        <input type="button" value="add" onClick={add} className="bg-blue-500 py-1 px-2 rounded cursor-pointer hover:bg-blue-400" />
        <input type="button" value="reduce" onClick={reduce} className="bg-blue-500 py-1 px-2 rounded cursor-pointer hover:bg-blue-400" />
      </div>
    </>
  );
}
