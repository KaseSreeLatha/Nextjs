import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>F1 page</div>
    <Link href={"/f1/f2"}>F2</Link>
    </>
  )
}

export default page