import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to Next.js Warm-up</h1>
      <p>
        This is a tiny practice app with two pages, an interactive counter and
        a small API endpoint.
      </p>
      <Counter />
      <ServerMessage />
    </main>
  );
}
