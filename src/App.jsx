import React from 'react'

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import MainPage from './components/main_page/MainPage'

const App = () => {
  return (
    <div className='container max-w-[1440px] mx-auto flex flex-col justify-start h-screen'>
      <Navbar />
      <div className='flex items-stretch justify-between'>
        <Sidebar />
        <MainPage />
      </div>
      <Footer />
    </div>
  )
}

export default App