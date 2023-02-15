import React, {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Waveform } from '@uiball/loaders'
import { useSelector } from "react-redux"
import { ProductsCategory } from "../components/ProductsForCategory/ProductsCategory"

export const PageCategory = () => {
    const { listProducts, loading } = useSelector(state => state.productsState)
    const [Products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        setProducts(listProducts.filter(product => product.category.name === id))
    }, [id])

    return (
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
        <div className='container-productos'>
        <section className="container productos">
            <ProductsCategory products={Products} category={id} />
        </section>
        </div>
    )
    )
}
