"use client";

import { allBlogs } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

interface Params {
  params: {
    slug: string;
  };
}
export default function BlogItem({ params }: Params) {
  const { slug } = params;
  const post = allBlogs.find((post) => post._raw.flattenedPath === slug);
  const MDXContent = useMDXComponent(post?.body.code as string);
  if (!post) {
    return <div>No posts found</div>;
  }

  return (
    <div className="flex justify-center mx-auto items-center flex-col my-4  p-2 w-full px-2 overflow-hidden">
      <div className="h-48 bg-red-300 rounded-lg flex justify-center items-center flex-col px-4 py-2 shadow-md my-7">
        <h1 className="font-medLarg text-3xl font-serif text-gray-900 mt-2">
          {post.title}
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm text-gray-900">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {post.publishedAt}
          </div>
        </div>
      </div>

      <article className="prose prose-stone prose-headings:capitalize prose-a:text-blue-600 w-full px-3">
        <MDXContent />
      </article>
    </div>
  );
}
