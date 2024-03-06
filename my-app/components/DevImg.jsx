import Link from 'next/link'
import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='myiMG' />

    </div>
  );
}
export default DevImg;
