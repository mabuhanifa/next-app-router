
export default async function getUser({ id }: { id: string }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error('Error');
    return res.json();
}