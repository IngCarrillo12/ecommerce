import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Loader } from "../components/Loader";
import {useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../store/ProductsSlice";
import { CardViewProduct } from "../components/CardViewProduct/CardViewProduct";
import { RelatedProducts } from "../components/CardViewProduct/RelatedProducts";

export const ViewProducto = () => {
    const { listProducts } = useSelector(state => state.products)
    const [Product, setProduct] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch() 
    useEffect(() => {
    dispatch(GetProducts())
    },[dispatch]);
    useEffect(()=>{
    listProducts.length &&(setProduct(listProducts.find(product=>product.id === Number(id))))
    },[listProducts,id])
  return (
    <>
    <CardViewProduct  key={Product.id} id={Product.id} title={Product.title} description={Product.description} price={Product.price} image={Product.image}  />
    <RelatedProducts category={Product.category}/>
    </>
    );
};
