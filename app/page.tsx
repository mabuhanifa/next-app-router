import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }
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
  );
}
