import React from 'react'
import { notFound } from 'next/navigation'

const randomNumbers=(count:number)=>{
return Math.floor(Math.random()*count);
}

const page = ({params}:{params:{
  productId:string,
  reviewId:string
}}) => {
  const random=randomNumbers(2);
  if(random===1){
    throw new Error("Error loading message")
  }
    if(parseInt(params.reviewId)>1000){
        notFound();
    }
  return (
    <div>
      <h1>Product details {params.productId} review {params.reviewId}</h1>
    </div>
  )
}

export default page