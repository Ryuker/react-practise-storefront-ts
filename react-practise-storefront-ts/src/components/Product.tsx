export default function Product({details}){
  return (
    <>
      <h2>Product {details.id}</h2>
      <h3>{details.name}</h3>
      <span>{details.description}</span>
      <button>Add to Cart</button>
      <button>Remove from Cart</button>
    </>
  )
}