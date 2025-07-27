import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    if (!params.id) {
      return NextResponse.json({ error: "ID is missing" }, { status: 400 });
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!response.ok) {
      return NextResponse.json({ error: "Something went wrong..." }, { status: 500 });
    }

    const post = await response.json();
    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /posts/[id] failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
