import React from 'react'
import { products } from './data';
import { MdStarRate } from "react-icons/md";
import "./Gadget.css"
const Gadget = () => {

    const gadgetsProduct = products?.filter(
      (product) => product?.Type == "Electronics" && product
    );
  
  return (
   <>
   <div className="main-gadget" >

    <div className="gadget">

      <div className="filter-gadget-item">
<div className="product-filter">

  <div className="filter">

    <h3 className='filter-pro'>Filter Products</h3>
  </div>
<div className="checkfilter">

<div className="check"><input type="checkbox" name='Airdrop' id='Airdrop'/>
<label htmlFor="Airdrop">Airdrop</label></div>

<div className="check">  <input type="checkbox" name='Headphone' id='Headphone'/>
<label htmlFor="Headphone">HeadPhone</label></div>

<div className="check">  <input type="checkbox" name='Watch'id='Watch'/>
<label htmlFor="Watch">Watch</label></div>

<div className="check">  <input type="checkbox" name='Mobile'id='Mobile'/>
<label htmlFor="Mobile">Mobile</label></div>

</div>


</div>

<div className="product-filter">

  <div className="filter">

    <h3 className='filter-prices'>Filter Price</h3>
  </div>
<div className="checkfilter">

<div className="check"><input type="radio" name='price-filter' id='all'/>
<label htmlFor="all">All</label></div>

<div className="check"><input type="radio" name='price-filter' id='1T2'/>
<label htmlFor="1T2">1000-2000</label></div>

<div className="check">  <input type="radio" name='price-filter' id='2T5'/>
<label htmlFor="2T5">2000-5000</label></div>

<div className="check">  <input type="radio" name='price-filter'id='5T10'/>
<label htmlFor="5T10">5000-10000</label></div>

<div className="check">  <input type="radio" name='price-filter'id='10T20'/>
<label htmlFor="10T20">10000-20000</label></div>

</div>

</div>

      </div>

<div className="gadget-product-list">
<div className="gadget-list">

  {gadgetsProduct.map((product)=>{return(  <div className="gadget-card">
    <div className="gadget-image">   <img   src={ product.Image[0]}  alt={ product.Name} className='gadget-img'/></div>
 
    <div className="category-description">
      <div className="ratings">
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           </div>
<div ><h6 className="gadget-heading">  { product.Heading}</h6></div>
<div className="price-gadget">
  <h6 style={{fontSize:"0.95rem"}}><del> ₹ { product.Price + 99}</del></h6>
  <h6 style={{color:"green",fontSize:"0.95rem"}}>  ₹{ product.Price}</h6>
</div>
    </div>
  </div>)})}

 
</div>



</div>


    </div>
   </div>
   
   </>
  )
}

export default Gadget
