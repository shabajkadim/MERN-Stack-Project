import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
const Demo = () => {
  const{state,LOGOUT}=useContext(AuthContext)
  
  const [products, setProducts] = useState([])
  console.log(products, "products")
  async function getProducts() {
      try {
        const response=await axios.get('http://localhost:8000/api/v1/product/get-product')
          if (response?.data.success) {
              setProducts(response.data.getAllData)
          }
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
      getProducts()
  }, [])
  return (
    <div style={state} className='pt-20 bg-slate-100 min-h-0 min-h-[650px]'>
      <h3>Demo page</h3>
      <h2>welcom:{state?.user?.name}</h2>
      <button onClick={LOGOUT}></button>
      <div>
      {products?.length ? <div >
                {products?.map((product) => (
                    <div>\
                      <p><img src={product.image} /></p>                       
                        <h3>Name : {product.name}</h3>
                        <h4>Price : {product.price}/-</h4>
                        <h4>Category : {product.category}</h4>
                       
                    </div>
                ))}
            </div> : <div>Loading..</div>}

      </div>
    </div>
  )
}

export default Demo

