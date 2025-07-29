// app/products/page.tsx
import React from "react";

type Product = {
  id: number;
  title: string;
  image: string;
};

const ProductListPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products: Product[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Product Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4 rounded"
            />
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
