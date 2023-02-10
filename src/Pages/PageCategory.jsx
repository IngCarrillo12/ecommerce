import React, {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { Loader } from "../components/Loader"
import { CardForCategory } from '../components/CardCategoryProducts/CardForCategory'
import { useSelector } from "react-redux"

export const PageCategory = () => {
    const { listProducts } = useSelector(state => state.products)
    const [Loading, setLoading] = useState(true)
    const [Products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        setProducts(listProducts.filter(product => product.category === id))
        setLoading(!Loading)
    }, [setLoading, setProducts, listProducts, id])

    return (
        <div className='container-productos'>
        <section className="container productos">
            <CardForCategory products={Products} category={id} />
        </section>
        </div>
    )
}
