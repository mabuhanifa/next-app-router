import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"

type Params = {
    params: {
        userId: string
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

                <UserPosts promise={userPostsData} />
            </Suspense>


        </>
    )
}
