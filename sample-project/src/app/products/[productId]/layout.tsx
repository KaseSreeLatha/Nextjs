import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div style={{backgroundColor:"lightpink",padding:"15px", marginTop:"10px"}}>Featured Products</div>
        {children}
    </div>
  )
}

export default layout