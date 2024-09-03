import Image from 'next/image'

const Photo = () => {
  return (
    <div className={'w-full h-full relative'}>
      <div className={'w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'}>
        <Image
          src={'/IMG_9897.jpg'}
          alt={''}
          quality={100}
          priority
          fill
          className={'object-contain'}
        />
      </div>
    </div>
  )
}

export default Photo
