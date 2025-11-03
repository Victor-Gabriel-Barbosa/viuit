import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1 className="text-4xl font-bold">viUit</h1>
    </main>
  );
}
