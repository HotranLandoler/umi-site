import PostCard from "@/components/posts/post-card";
import NoPost from "./no-post";
import { getAllPosts } from "@/data/post-data";

type Props = {
  posts: Awaited<ReturnType<typeof getAllPosts>>;
};

export default async function Posts({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <NoPost />;
  }

  return (
    <div className="columns-3xs">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
