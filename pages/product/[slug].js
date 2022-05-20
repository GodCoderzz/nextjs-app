import React from 'react'
import { useRouter } from 'next/router'

const Slug = (req, res) => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>The Slug is: {slug}</div>
  )
}

export default Slug