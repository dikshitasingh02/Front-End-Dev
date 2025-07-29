import { Product } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const { data } = await axios.get<Product[]>(
            "https://fakestoreapi.com/products"
        );

        console.log("Fetched Products:", data);

        if (!Array.isArray(data)) {
            console.warn("Data is not an array");
            return NextResponse.json([], { status: 200 });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error fetching products:", error.message);
        return new NextResponse("Internal server error", { status: 500 });
    }
};

