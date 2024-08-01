import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import {
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { posts } from "../blog/blog_data";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Image, Button } from "@nextui-org/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const post = posts.find((p) => p.slug === params.post);

  if (!post) {
    throw new Response("Aucune publication trouvée.", {
      status: 500,
    });
  }

  return json({ post });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.post.title || "Blogue" },
    {
      name: "description",
      content: data?.post.summary || "Publications de Laurence bf.",
    },
  ];
};

const BlogPost = () => {
  const postData = useLoaderData<typeof loader>().post;
  const thisPost = posts.find((p) => p.slug === postData.slug);

  if (!thisPost) {
    return (
      <div className="flex flex-col md:inline md:ml-4 md:p-24">
        <h1 className="text-3xl font-bold pb-8 font-mulish">
          Erreur lors du chargement de l'article
        </h1>
        <Button as={Link} to={"/blogue"} className="bg-lbf-bleu text-white">
          <ArrowLeftIcon className="w-6 h-6" />
          <p className="font-mulish">Retour</p>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold pb-8 font-mulish">{postData.title}</h1>
      <p className="pb-4 font-mulish">
        Date de publication :{" "}
        {thisPost.date.toLocaleDateString("fr-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="flex flex-col md:inline md:ml-4 py-4 font-mulish">
        <Image
          src={postData.image}
          alt={postData.image_alt}
          removeWrapper
          className="md:float-right md:ml-8 my-4 rounded-lg max-w-sm self-center"
        />
        {thisPost.post}
      </div>
      <Button
        as={Link}
        to={"/blogue"}
        className="bg-lbf-bleu text-white self-start"
      >
        <ArrowLeftIcon className="w-6 h-6" />
        <p className="font-mulish">Retour</p>
      </Button>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <div className="flex flex-col md:inline md:ml-4 md:p-24">
          <h1 className="text-3xl font-bold pb-8 font-mulish">{error.data}</h1>
          <Button as={Link} to={"/blogue"} className="bg-lbf-bleu text-white">
            <ArrowLeftIcon className="w-6 h-6" />
            <p className="font-mulish">Retour</p>
          </Button>
        </div>
      </div>
    );
  }
}

export default BlogPost;
