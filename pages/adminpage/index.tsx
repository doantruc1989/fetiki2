import Head from 'next/head'
import React from 'react'
import HeadSeo from '../components/HeadSeo'

function Index() {
  const prop = {
    title: "tiki admin quản trị",
    keywords: "admin tiki quản trị",
    description: "làm trang quản trị admin đơn giản easy",
  }
  return (
    <div>
      <HeadSeo prop={prop}/>
    </div>
  )
}

export default Index