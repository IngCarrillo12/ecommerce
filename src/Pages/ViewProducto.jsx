import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardViewProduct } from "../components/CardViewProduct/CardViewProduct";
import { RelatedProducts } from "../components/CardViewProduct/RelatedProducts";
import { Waveform } from '@uiball/loaders'

export const ViewProducto = () => {
    const { listProducts } = useSelector(state => state.productsState)
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const findProduct = async(params)=>{
      const products = await listProducts
      const product = await products.find(product => product.id === Number(params))
      const {id, title, price, images, description, category} = await product
      const [image] = await images
      setProduct({id,title,price,image,description, category}) 
      setLoading(false)
    }
    useEffect(()=>{
     findProduct(id)
    },[id])
  return (
    <>
    {
    loading?(
        <div style={{display:"flex", justifyContent:'center', alignItems:'center', height:'500px' , fontSize:'200px'}}>
          <Waveform 
        size={40}
        lineWeight={3.5}
        speed={1} 
        color="black" 
        />
        </div>
        
      
        
      ):(
        <>
        <CardViewProduct  key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} image={product.image}  />
        <RelatedProducts idProduct={product.id} category={product.category.name}/>
        </>
      )
    }
    
    </>
    );
};
