export interface IProduct {
  id: number;
  name: string;
  description?: string;
}

interface IProps{
  product: IProduct;
  onProductAdd: () => void ;
  onProductDelete: () => void ;
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