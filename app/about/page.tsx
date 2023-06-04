import Link from "next/link";

export default function page() {
    return (
        <div className="p-40">
            page
            <Link href={"/"} className="text-red-600">
                Go to Home
            </Link>
            <Link href={"/users"} className="text-red-600">
                Go to Users
            </Link>
        </div>
    )
}
