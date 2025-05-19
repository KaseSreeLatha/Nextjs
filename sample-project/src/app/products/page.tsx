import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Products List</h1>
      <h4> <Link href="/products/1">Product 1</Link></h4>
      <h4> <Link href="/products/2">Product 2</Link></h4>
      <h4> <Link href="/products/3" replace>Product 3</Link></h4>
    </div>
  )
}

export default page