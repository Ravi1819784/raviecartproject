import React from 'react'
import "./AddToCart.css"
const AddToCart = () => {
  return (
    <>
    
    <div className="main-addtocart">
        <div className="left-addtocart">
            <div className="left-addtocartlist">
               <div className="imageaddtocart">
                <div className="leftimageaddtocard"><img src="./src/assets/banner/Slider1.png" alt="" /></div>
                <div className="addproduct">
                    <p className='minus'>-</p>
                    <p className='number'>1</p>
                    <p className='minus'>+</p>
                </div>
               </div>
               <div className="product-details">
                <h4>description</h4>
                <h5>heading</h5>
                <h6>brand</h6>
                <p>price</p>
                <p className='cate'>category</p>
         <h2>REMOVE</h2>
               </div>
            </div>
        </div>
        <div className="right-addtocart"></div>
    </div>
    </>
  )
}

export default AddToCart
