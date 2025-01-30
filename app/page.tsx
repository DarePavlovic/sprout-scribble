import PostButton from "@/components/post-button";
import createPost from "@/server/actions/create-posts";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const {error, success} = await getPosts();
  if(error) {
    throw new Error(error)
  }
  if(success) {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1>Welcome to Next.js</h1>
       {success.map((post) => (
         <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <form action={createPost}>
          <input className="bg-blue" type="text" name="title" placeholder="Title" />
          <PostButton/>
        </form>
        <div>{Date.now()}</div>
      </main>
       
    </div>
  );
}
}
