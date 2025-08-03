const HomePage = async () => {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  const allProducts = await res.json();
  const featured = allProducts.slice(0, 4); // Pick first 4 as featured

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((product: any) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
            <h2 className="text-center mt-2 font-semibold text-gray-700 line-clamp-2">
              {product.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
