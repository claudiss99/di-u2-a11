import { useImmer } from 'use-immer';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Queso',
  count: 5,
}, {
  id: 2,
  name: 'Espaguetis',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    updateProducts
  ] = useImmer(initialProducts)

  function handleIncreaseClick(productId) {
    /*
    setProducts(
      products.map(product =>{
        if(product.id === productId){
          return{...product, count: product.count+1};
        }else{
          return product;
        }
      })
    )
    
    */
    updateProducts(draft => {
      const product = draft.find(a =>
        a.id === productId
      );
      product.count = product.count+1;
    });
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
