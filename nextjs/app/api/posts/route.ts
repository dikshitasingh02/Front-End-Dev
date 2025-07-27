import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      return NextResponse.json({ error: "Something went wrong..." }, { status: 500 });
    }

    const posts = await response.json();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
