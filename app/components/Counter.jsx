'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>Counter</h2>
      <p>Current value: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </section>
  );
}
