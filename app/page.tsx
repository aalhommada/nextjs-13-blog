import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center mt-5 ">
      <h2 className="text-5xl ">This is home page</h2>
    </div>
  );
}
