import React from 'react'

const page = ({params}:{params:{
  productId:string
}}) => {
  console.log(params)
  // let [data,setData]=useState({})
  // const settData=()=>{
  //   console.log(params)
  // }
  return (
    <div>
      <h1>Product details {params.productId}</h1>
      {/* <button onClick={settData}>set</button> */}
    </div>
  )
}

export default page