import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { posts } from './post'

export async function loader({
    params,
  }: LoaderFunctionArgs) {
    return posts.find((p) => p.slug === params.post);
  }

const BlogPost = () => {
    const post = useLoaderData<typeof loader>()

    return (
        <div>
            <p className="pb-4 font-mulish">Date de publication : {post.date}</p>
            <div className="flex flex-col md:inline md:ml-4 md:p-24">
                {post.mdx}
            </div>
        </div>
            

    );
};

export default BlogPost;
