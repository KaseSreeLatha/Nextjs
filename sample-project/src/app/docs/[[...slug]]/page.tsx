import React from 'react'

const page = ({params}:{
    params:{
        slug:string[]
    }
}) => {
    if(params.slug?.length===2){
  return (
    <div>Viewing docs for feature {params.slug[0]} and concept of {params.slug[1]}</div>
  )
}
else if(params.slug?.length===1){
    return(
        <div>Viewing docs for feature {params.slug[0]}</div>
    )
}
else{
    return(
        <div>Docs home page</div>
    )
}
}
export default page