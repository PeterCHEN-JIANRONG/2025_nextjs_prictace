"use client";
import { useContext, useMemo, useRef, useState } from "react";
import axios from "axios";
import type { User } from "./types/user";
import UserCard from "./components/UserCard";
import { ThemeContext } from "./contexts/all";
import classNames from "classnames";
import { useReducer } from 'react';

interface Obj {
  age: number
}

interface AddAction {
  type: string
}

function reducer(state: Obj, action:AddAction) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  if (action.type === 'decremented_age') {
    return {
      age: state.age - 1
    };
  }
  // throw Error('Unknown action.');
  console.log('Unknown action.')
  return state
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
    <div className="space-x-2">
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment
      </button>
      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        Decrement
      </button>
      <button onClick={() => {
        dispatch({ type: 'test' })
      }}>
        test
      </button>
    </div>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
