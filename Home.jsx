import React, { useState } from 'react'
import Header from './Header/Header'
import Section from './Section/SEction'
import Footer from './Footer/Footer'
import Card from '../Components/Card'
import Category from '../Components/Category'
import Key from './Footer/Key'
import Trending from '../Components/Trending'
import ProductLIst from '../Components/ProductLIst'
import { products } from '../Components/data'
import Gadget from '../Components/Gadget'


const Home = ({todo}) => {



  const fashionProducts = products.filter(
    (product) => product.Type.toLowerCase() == "fashion"
  );


  const electronicsProducts = products.filter(
    (product) => product.Type.toLowerCase() == "electronics"
  );


  const [see,setSee]=useState(false)
  const text= "hgfkjdghjfgh gjhgfdjgd gfdjkghfldgd fhyddgjfh.gnfdgn bghkgthyg hkjh;klgh lh  ";
  return (
  <>
  
  <Header/>

<Category/>
<Trending/>

<ProductLIst ProductItem={fashionProducts} title={"Fashion Product's"}/>
<ProductLIst ProductItem={electronicsProducts} title={"Electronics Product's"} />

  <Card todo={todo}/>
  




<div style={{display:"flex", alignItems:"center",marginBlock:"20px",justifyContent:"center",flexDirection:"column",gap:"10px"}}>

  <p>{see? text:`${text.slice(0,50)}...`}</p>

  <button onClick={()=>{setSee(!see)}}>{see ? 'SeeLess':'SeeMore'}</button>
  
</div>




<Section  />

  
  <Footer/>

  <Key/>
  </>
  )
}

export default Home
