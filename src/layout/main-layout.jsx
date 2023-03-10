import React from 'react'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'

const MainLayout = ({children}) => {
  return (
      <>
          <Header />
          {children}
          <Footer />
      </>
  )
}

export default MainLayout