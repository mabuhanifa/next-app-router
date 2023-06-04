type Props = {
    promise: Promise<Post[]>
}
export default async function UserPosts({ promise }: Props) {
    const post = await promise;

    const content = post.map(post => <article key={post.id}>
        <h2>{post.title}</h2><br />
        <p>
            {post.body}
        </p>
    </article>)
    return (
        <div>UserPosts</div>
    )
}
