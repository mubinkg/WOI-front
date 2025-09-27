import { Header } from "@/features/components/common/header";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url('/asset/bg.jpg')] bg-cover bg-center">
      <Header />
      <h1>Home</h1>
    </div>
  );
}
