"use client"
import React from 'react'
import style from "./style.module.css"
import Image from 'next/image'



const page = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.nav}>
          <div className={style.photo}>
           <Image src="/logo.png" height={50} width={200} alt="photos" />
          </div>
        </div>
        <div className={style.top}>
          <Image height={400}width={1400} src="/star.jpg" alt="" />
        </div>
      </div>
    </>



    
  )
}

export default page