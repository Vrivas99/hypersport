import React from 'react'
import Navbar from '@/components/Navbar'
import Script from '@/components/scripts'
import BannersLogin from '@/components/BannersLogin'
import Footer from '@/components/footer'

const Login = () => {
    return (

        <div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css" />
            <Navbar/>

            <BannersLogin />
  
            <Footer />
        </div>
        
        
    )
}

export default Login