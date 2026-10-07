'use client';

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/message");

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Could not load the message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="card">
      <h2>Server message</h2>
      <button type="button" onClick={loadMessage} disabled={loading}>
        Load server message
      </button>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p className="error">Error: {error}</p>}
    </section>
  );
}
