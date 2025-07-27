

const ProductDetailsPage = async ({ params,}: {params: { productId: string}}) => {
    const resolveParams = await params;
  return <div>ProductDetailsPage: {resolveParams.productId}</div>
  
}

export default ProductDetailsPage