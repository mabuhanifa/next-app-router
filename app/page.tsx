import Link from "next/link";

export default function Home() {
  return (
    <main>
      hello world

      <h1>
        <Link href={"/about"} className="text-red-600">
          Go to About
        </Link>
      </h1>

      <h1>
        <Link href={"/users"} className="text-red-600">
          Go to Users
        </Link>
      </h1>
    </main>
  )
}
