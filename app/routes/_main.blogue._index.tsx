import { Link } from "@remix-run/react";
import { posts } from "../blog/blog_data";
import { Image } from "@nextui-org/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blogue" },
    {
      name: "description",
      content: "Publications de Laurence bf.",
    },
  ];
};

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-8 font-mulish">Blogue</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 place-content center font-mulish">
        {posts
          .sort(function (a, b) {
            return b.date.getTime() - a.date.getTime();
          })
          .map((post) => {
            return (
              <Link to={`/blogue/${post.slug}`} key={post.slug}>
                <article className="flex flex-col gap-2 bg-lbf-orange shadow-md shadow-gray-500 rounded-lg p-4 justify-between place-items-center transition ease-in-out duration-300 hover:scale-105 h-full">
                  <h2 className="font-bold text-xl text-center font-mulish">
                    {post.title}
                  </h2>
                  <Image
                    src={post.image}
                    alt={post.image_alt}
                    className="rounded-xl max-w-xs bg-contain"
                  />
                  <p className="font-mulish">
                    Publication :{" "}
                    {post.date.toLocaleDateString("fr-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </article>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BlogPage;
