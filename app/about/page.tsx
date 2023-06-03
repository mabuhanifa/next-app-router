import Link from "next/link";

export default function page() {
    return (
        <div className="p-40">
            page
            <Link href={"/"}>
                Go to Home
            </Link>
            <Link href={"/users"}>
                Go to Users
            </Link>
        </div>
    )
}
