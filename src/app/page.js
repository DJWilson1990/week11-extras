import Image from "next/image";
import UserPage from "./components/User";
import { Counter } from "./components/Counter";

export default function Home() {
  return (
    <div>
      <p>Hi</p>
      <UserPage />
      <Counter />
    </div>
  );
}
