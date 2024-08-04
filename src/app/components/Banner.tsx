import Image from 'next/image';
import React from 'react'

interface CardProps {
  bg: string;
  title:string;
  desc:string;
  button:string;
  img: string;
  imgPosition: React.CSSProperties;
  textPosition: React.CSSProperties;
  descPosition: React.CSSProperties;
  buttonStyle: React.CSSProperties;
}
const Banner: React.FC<CardProps>  = ({bg,title,desc,button,img,imgPosition,textPosition,descPosition,buttonStyle}) => {
  return (
    <div className='relative overflow-hidden'>
    <div className='w-96 h-96 ' style={{backgroundImage: `url(${bg})`,backgroundSize: "cover",
    backgroundPosition: "center",}}>
  </div>
  <div className='absolute  text-center w-full px-10 text-white' 
  style={textPosition}>
        <p className=' text-3xl font-bold py-2'>{title}</p>
        <p className=' text-sm ' style={descPosition}>{desc}</p>
  </div>
  <div className=' absolute bottom-10' style={buttonStyle}>
    <p className='text-sm font-semibold' >{button}</p>
  </div>
  <div className=' absolute' style={imgPosition}>
  <Image src={img} width={300} height={200} alt='' className='w-full h-full' style={imgPosition}/>
  </div>
  </div>
  )
}

export default Banner