
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Product not found.</div>;
  }

  const product: Product = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-xl font-semibold mb-4 text-green-600">
            ${product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="mt-4 text-sm text-yellow-600">
            ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
