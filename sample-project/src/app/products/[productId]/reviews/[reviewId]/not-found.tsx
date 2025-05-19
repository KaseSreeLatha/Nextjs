'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const notfound = () => {
  const pathname=usePathname();
  console.log(pathname)
  const productId=pathname.split("/")[2]
  const reviewId=pathname.split("/")[4]
  return (
    <div>Review {reviewId} not found for product {productId}</div>
  )
}

export default notfound