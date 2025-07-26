"use client";

import { FC, Suspense, use, useEffect, useState } from "react";

type Post = {
    id: string;
    title: string;
    body: string;
};

const fetchPost = async (id: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch the posts");
    }

    return response.json();
};

// used for static site generation
// export const generateStaticParams = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts: Post[] = await response.json();

//     return posts.map((post) => ({
//         id: post.id.toString(),
//     }));
// };

interface BlogPageProps {
    params: {id: string};
}

// used for server side rendering
// const BlogPageContent: FC<BlogPageProps> = async ({ params}) => {
//     const resolveParams = await params;
//     const post: Post = await fetchPost(params.id);

//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//         </div>
//     );
// };

// const BlogPage: FC<BlogPageProps> = (props) => {
//   return (
//     <Suspense fallback={<div>Loading....</div>}>
//       <BlogPageContent {...props} />
//     </Suspense>
//   );
// };

const BlogPage: FC<BlogPageProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPost(params.id);
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading post: {error}</div>;

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default BlogPage;