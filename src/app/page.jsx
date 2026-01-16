import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto">
      <h1 className="text-gray-600 font-bold text-5xl">V0 Clone</h1>
      <Button className="p-4 m-6 bg-gray-800 text-white hover:bg-green-500 hover:text-black">Get Started</Button>
    </div>
  );
}
