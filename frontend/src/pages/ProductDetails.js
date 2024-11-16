import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast } from 'react-toastify';


 

export default function ProductDetails({cartItems,setCartItems}) {
  const [product, setProduct] = useState(null);
  const [qty,setQty]=useState(1);
  const { id } = useParams();

  

  useEffect(() => {
    
    fetch(process.env.REACT_APP_API_URL + '/products/'+id)
      .then(res => res.json())
      .then(res => setProduct(res.product))
     }, []);
  function addToCart(){
        const itemExist=cartItems.find((item)=>item.product._id == product._id)
        if (!itemExist) {
          const newItem = { product, qty };
          setCartItems((state) => [...state, newItem]);
          toast.success("Item added to your cart!",{autoClose:1500});
        } else {
          toast.info("Item is already in your cart.",{autoClose:1500}); // Notify if already in cart
        }
      }
  
  function increaseQty(){
    if (product.stock==qty){
      toast.warn("Stock limit reached for this product",{autoClose:1500})
      return;
    }
    else if(product.stock==0){
      toast.warn("Out of Stock",{autoClose:1500})
    }
    else{
    setQty((state)=>state+1)
    }
  }
  function decreaseQty(){
    if(qty>1){
      setQty((state)=>state-1)
    }
    
  }
  // function incrementQty() {
  //   if (qty < product.stock) {
  //     setQty(prevQty => prevQty + 1);
  //   }
  // }

  // function decrementQty() {
  //   if (qty > 1) {
  //     setQty(prevQty => prevQty - 1);
  //   }
  // }
 
  return product && (
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-6 img-fluid" id="product_image">
            <img src={product.images[0].image} alt="sdf" height="500" width="500"/>
          </div>
  
          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">product #{product._id}</p>
  
            <hr />
  
            <div className="rating-outer">
              <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
            </div>
  
            <hr />
  
            <p id="product_price">${product.price}</p>
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus"  onClick={decreaseQty} style={{paddingLeft:'10px',paddingRight:'10px'}}>-</span>
  
              <input type="number" className="form-control count d-inline" value={qty} readOnly />
  
              <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
            </div>
            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addToCart} disabled={product.stock==0}>Add to Cart</button>
  
            <hr />
  
            <p>Status: <span id="stock_status" className={product.stock > 0 ?'text-success':'text-danger'}>{product.stock>0 ? 'In Stock':'Out Of Stock'}</span></p>
  
            <hr />
  
            <h4 className="mt-2">Description:</h4>
            <p>
              {product.description}
            </p>
  
            <hr />
  
            <p id="product_seller" className="mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>
  
            <div className="rating w-50"></div>
          </div>
        </div>
      </div>
    );
  }
  