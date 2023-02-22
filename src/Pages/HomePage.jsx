import { Banner } from '../components/banner/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { CardForCategory } from '../components/CardCategoryProducts/CardForCategory'
import { Waveform } from '@uiball/loaders'
import { useEffect } from 'react'
import { GetProducts } from '../store/ProductsSlice'
import {Auth} from '../components/Auth/Auth'

export const HomePage = () => {
  const { listProducts, loading } = useSelector(state => state.productsState);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProducts())
  }, [])
  return (<>
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
      <Banner/>
  <section className='container-productos'>
    <div className="container productos"> 
    <CardForCategory products={listProducts} category={'Shoes'} />
    <CardForCategory products={listProducts} category={'Clothes'} />
    <CardForCategory products={listProducts} category={"Others"} />
  </div>
  </section>
  </>
    )
  }
    <Auth/>
  </>
  )
}