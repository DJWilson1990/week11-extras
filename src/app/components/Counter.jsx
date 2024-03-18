"use client";

import { useReducer } from "react";

export function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: 0</p>
      <button
        className="border p-2 m-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment count
      </button>
      <button
        className="border p-2 m-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement count
      </button>
    </div>
  );
}
