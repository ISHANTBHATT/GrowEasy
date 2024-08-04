import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <Homepage />
        </div>
    </main>
  );
}
