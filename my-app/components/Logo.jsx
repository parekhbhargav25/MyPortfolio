import Link from 'next/link'
import Image from 'next/image'


const Logo = () => {
    return (
        <Link href ='/'> 
            <Image src='/4.png' width={70} height={40} priority alt='bhargav' />
        </Link>
    )
}
export default Logo;