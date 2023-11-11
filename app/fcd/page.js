"use client"
import React from 'react'
import  Image  from "next/image"
import style from "./style.module.css"

const  fcd = () => {
  return (
    <div className={style.main}>

      <div className={style.nav}>
        < Image className={style.img} src="/logo.png" height={20} width={130} alt="photo" />
      </div>
      <div className={style.middle}>
        <Image src="https://knowledgebank-beats.squareyards.com/wp-content/themes/generatepress-child/assets/images/knowladge-center-img/knowledge-center-banner-img.svg" fill={true}  alt="" />

      </div>
       </div>
  )
}

export default  fcd