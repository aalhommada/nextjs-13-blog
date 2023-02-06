import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-around items-center w-1/3 mx-auto bg-gray-800 text-gray-100">
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
    </nav>
  );
}
