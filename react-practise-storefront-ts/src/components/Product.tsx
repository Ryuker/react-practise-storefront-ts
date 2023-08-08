interface Product {
  id?: number;
  name?: string;
  description?: string;
}

interface IProps{
  product: Product;
  onProductAdd: () => any ;
  onProductDelete: () => any ;
}

export default function Product(props: IProps){
  const {product, onProductAdd, onProductDelete} = props;

  return (
    <>
      <h2>Product {product.id} - {product.name}</h2>
      <span>{product.description}</span>
      <button onClick={onProductAdd}>Add to Cart</button>
      <button onClick={onProductDelete}>Remove from Cart</button>
    </>
  )
}