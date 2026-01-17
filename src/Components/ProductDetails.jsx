import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    const [product,setProduct] = useState({});
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
         fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {return res.json()})
            .then((data) => {
                setProduct(data);
            });
        },[])
  return (
    <div>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
    </div>
  )
}
