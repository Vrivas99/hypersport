import Image from 'next/image'
import React from 'react'
import BannerFFXIV from '../public/img/BannerFFXIV.png'

export const Banner = () => {
    return (
        <Image src={BannerFFXIV} alt='bannerFFXIV'></Image>
    )
}
