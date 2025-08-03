import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { data } = body;

    const emailObj = data?.email_addresses?.[0];
    const email = emailObj?.email_address || "unknown";

    const userData = {
      first_name: data?.first_name || "NoFirstName",
      last_name: data?.last_name || "NoLastName",
      image_url: data?.image_url || "",
      email_address: email,
    };

    console.log("Clerk Webhook User Data:", userData);

    return NextResponse.json({ message: "Webhook received successfully" }, { status: 200 });
  } catch (error) {
    console.error(" Webhook error:", (error as Error).message);
    return NextResponse.json(
      { message: `Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
};

