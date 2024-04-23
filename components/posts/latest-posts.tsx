import BlogCard from "@/components/blog-card";

import { fetchFeed } from "@/lib/data";

export default async function LatestPosts() {
  const feed = await fetchFeed();

  return (
    <div className="columns-4">
      {feed.map(function renderBlogItem(blogItem) {
        return <BlogCard key={blogItem.id} blogItem={blogItem} />;
      })}
    </div>
  );
}
