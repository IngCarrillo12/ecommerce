
import { Banner } from '../components/banner/Banner'
import { useEffect } from 'react'
import { GetProducts } from '../store/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CardForCategory } from '../components/CardCategoryProducts/CardForCategory'

export const HomePage = () => {
  const { listProducts } = useSelector(state => state.products);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProducts())
  }, [dispatch])
  
  return (<>
    <Banner/>
  <section className='container-productos'>
   <div className="container productos"> 
   <CardForCategory products={listProducts} category={'electronics'} />
   <CardForCategory products={listProducts} category={'jewelery'} />
   <CardForCategory products={listProducts} category={"men's clothing"} />
  </div>
  </section>
  </>
  )
}