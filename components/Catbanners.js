import Bici from '../public/img/bicibanner.png'
import Basquet from '../public/img/basquetbanner.png'
import Futbol from '../public/img/futbolbanner.png'
import Volei from '../public/img/Voleibanner.png'
import Image from 'next/image'
import Link from 'next/link'
const Catbanners = () => {
    return (
        <div className='flex flex-wrap justify-center h'>
            <Link className="justify-center flex w-1/2 md:w-80 md:h-80 overflow-hidden" href=''>
                <Image className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={Bici} alt='Imagen Prod'></Image>
            </Link>
            <Link className="justify-center flex w-1/2 md:w-80 md:h-80 overflow-hidden" href=''>
                <Image className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={Basquet} alt='Imagen Prod'></Image>
            </Link>
            <Link className="justify-center flex w-1/2 md:w-80 md:h-80 overflow-hidden" href=''>
                <Image className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={Futbol} alt='Imagen Prod'></Image>
            </Link>
            <Link className="justify-center flex w-1/2 md:w-80 md:h-80 overflow-hidden" href=''>
                <Image className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={Volei} alt='Imagen Prod'></Image>
            </Link>
        </div>

    )
}

export default Catbanners