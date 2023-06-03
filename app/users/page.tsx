import getAllUsers from "@/lib/getAllUsers";
import { User } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function Page() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    const content = (
        <section>
            <h2>
                <Link href={'/'}>
                    Back to Home
                </Link>
            </h2>
            <br />
            {
                users.map((user) => (
                    <div key={user.id}>
                        <p>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />


                    </div>
                ))
            }

        </section>
    )
    return content;

}
