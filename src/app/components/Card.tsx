"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { MdEdit } from "react-icons/md";
import { PiUploadSimpleBold } from "react-icons/pi";
import Banner from "./Banner";
import html2canvas from 'html2canvas';

interface CardProps {
  key: number,
  bg: string;
  imgPosition: React.CSSProperties;
  textPosition: React.CSSProperties;
  descPosition: React.CSSProperties;
  buttonStyle: React.CSSProperties;
}

interface SpringModalProps {
  title: string;
  desc: string;
  bg: string;
  button: string;
  isOpen: boolean;
  img: string;
  imgPosition: React.CSSProperties;
  textPosition: React.CSSProperties;
  descPosition: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  setImg: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  setButton: React.Dispatch<React.SetStateAction<string>>;
}

const eximg = [{ img: "/ex.jpg" }, { img: "/ex1.jpg" }, { img: "/ex2.jpg" }, { img: "/ex3.jpg" }, { img: "/ex4.jpg" }, { img: "/ex5.jpg" }, { img: "/ex6.jpg" }]

const Card: React.FC<CardProps> = ({ bg,imgPosition,textPosition,descPosition,buttonStyle,key}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Trendy Fashion Essentials");
  const [desc, setDesc] = useState("Explore the latest collection of clothing and accessories.");
  const [button, setButton] = useState("Explore Menu");
  const [img, setImg] = useState("/ex.jpg");

  const handleDownload = async () => {
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      const canvas = await html2canvas(bannerElement);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'banner.png';
      link.click();
    }
  };

  return (
    <div className='w-96 h-96 relative'>
      <div id="banner" className='w-full h-full'>
        <Banner bg={bg} title={title} desc={desc} button={button} img={img} imgPosition={imgPosition} textPosition={textPosition } descPosition={descPosition} buttonStyle={buttonStyle} />
      </div>
      <MdEdit className=' absolute top-2 right-2 text-white h-6 w-6 z-10' onClick={() => setIsOpen(true)} />
      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-b from-black/40 via-black/10"></div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} bg={bg} title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} button={button} setButton={setButton} img={img} setImg={setImg} handleDownload={handleDownload} textPosition={textPosition} imgPosition={imgPosition} descPosition={descPosition} buttonStyle={buttonStyle} />
    </div>
  );
};

const SpringModal: React.FC<SpringModalProps & { handleDownload: () => void }> = ({ isOpen, setIsOpen, bg, title, desc, setTitle, setDesc, button, setButton, img, setImg, handleDownload,textPosition,imgPosition,descPosition,buttonStyle }) => {
  const handleClick = (img: string) => {
    setImg(img);
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden mt-80"
          >
            <div className="relative z-10">
              <div className='flex flex-col items-center'>
                <Banner bg={bg} title={title} desc={desc} button={button} img={img} imgPosition={imgPosition} textPosition={textPosition} descPosition={descPosition} buttonStyle={buttonStyle}/>
              </div>
              <div className='flex flex-col gap-4 pt-6'>
                <p className='text-sm'>Image Attribution: Photo by <a>Odiseo Castrejon</a> on <a>Unsplash</a></p>
                Images
                <div className='flex flex-wrap gap-4 overflow-x-auto'>
                  <label className="w-14 h-14 flex  items-center justify-center cursor-pointer bg-white rounded-full">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <PiUploadSimpleBold className="text-gray-500 text-3xl hover:text-gray-700 " />
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={handleUpload}
                      // onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                  {eximg.map((e) => (
                    <label key={e.img} className="w-14 h-14 flex items-center justify-center cursor-pointer bg-white rounded-full" onClick={() => handleClick(e.img)}>
                      <Image src={e.img} width={200} height={200} className='w-full h-full rounded-full' alt="" />
                    </label>
                  ))}
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <input
                      id="desc"
                      name="desc"
                      type="text"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="button"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Button
                  </label>
                  <div className="mt-2">
                    <input
                      id="button"
                      name="button"
                      type="text"
                      value={button}
                      onChange={(e) => setButton(e.target.value)}
                      className="p-2 block w-full rounded-md border-0 py-1.5 bg-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:border-blue-500 focus:bg-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Done
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
