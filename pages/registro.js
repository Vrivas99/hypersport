import React from 'react'
import Navbar from '@/components/Navbar'
import Script from '@/components/scripts'
import BannersRegistro from '@/components/BannersRegistro'

const Registro = () => {
    return (
        <div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css" />
            <Navbar />
            <BannersRegistro>
            </BannersRegistro>
        </div>
    )
}

export default Registro