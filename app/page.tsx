import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header/>
      <Banner/>
    </div>
  );
}
