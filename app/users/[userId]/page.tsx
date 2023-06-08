import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { type Metadata } from "next"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetaData({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData
    return {
        title: user.name,
        description: `This is the page of  ${user.name}`,
    }
}


export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPost(userId);

    //const [user, userPost] = await Promise.all([userData, userPostsData])
    const user = await userData
    return (
        <>

            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<p>Loading...</p>}>
                { /* @ts-expect-error */}
                <UserPosts promise={userPostsData} />
            </Suspense>


        </>
    )
}
