import Link from "next/link";

const ProductListPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="text-center mt-2 font-semibold text-gray-700 line-clamp-2">
                {product.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
