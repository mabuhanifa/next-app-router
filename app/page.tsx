import Link from "next/link";

export default function Home() {
  return (
    <main>
      hello world
      <Link href={"/about"}>
        Go to About
      </Link>
    </main>
  )
}
