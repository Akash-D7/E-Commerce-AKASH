import { Fragment, useEffect, useState } from 'react'; 
import ProductCard1 from '../components/ProductCard1';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
 
  const [products, setProducts] = useState([]); 
  const [searchParams, setSearchParams]=useSearchParams()

  useEffect(() => {
    
    fetch(process.env.REACT_APP_API_URL + '/products?'+searchParams)
      .then(res => res.json())
      .then(res => {
       
        setProducts(res.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [searchParams]);

  return (
    <Fragment>
        <h1 id="products_heading"style={{ textAlign: 'center', marginTop:'50px' }}>Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard1 product={product} />)} 
        </div>
        </section>
    </Fragment>
  );
}
