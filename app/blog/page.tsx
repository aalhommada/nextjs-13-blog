import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center max-w-3/4 mt-[60px] ">
      <h1 className="text-3xl font-medLarg text-primary text-center my-3 underline text-shadow-md ">
        Latest Blog Articles
      </h1>
      <div className="my-4 w-full">
        {allBlogs
          .sort((a, b) => {
            return (
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
            );
          })
          .map((post, index) => {
            return (
              <Link
                href={`/blog/${post.slug}`}
                key={`post-slug-${index}`}
                className="flex flex-col justify-center items-center my-1 md:w-3/4 md:mx-auto"
              >
                <div className="bg-gray-50  m-1 px-3 py-2 rounded-lg shadow-md w-full hover:bg-gray-200">
                  <span className="font-bold text-xl font-medLarg hover:underline mb-3 capitalize md:text-2xl">
                    {post.title}
                  </span>
                  <br />
                  <span className=" text-md mb-3 capitalize md:text-2xl">
                    {post.summary}
                  </span>
                  <div className="flex w-1/2 mt-2 gap-1 items-center">
                    <span className="rounded-lg bg-red-400 px-2 py-1 font-medLarg">
                      {post.publishedAt}
                    </span>
                    <div className="flex">
                      {post.category.split(",").map((cate, index) => {
                        return (
                          <span
                            key={`category-item-${index}`}
                            className="rounded-lg bg-gray-400 m-1 px-2 py-1 text-white"
                          >
                            {cate}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
