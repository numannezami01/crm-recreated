 "use client"
 import Link from 'next/link';
 import React from 'react';
 import style from "./style.module.css";
 import Image from 'next/image';
 import {AiOutlineSearch} from "react-icons/Ai";
 
 const home= () => {
   
   


   return (
    <>
     <div className={style.home} >
       <div className={style.nav}>
        <div className={style.left}>
         <Image className={style.images} src={"/logo.png"}width={150} height={50} alt='image' priority={true}/>
        </div>
        <div className={style.right}>
          <div className={style.box}>
            <Link className={style.Link} href="/Dashboard">Dashboard</Link>
            </div>
            <div className={style.box}>
            <Link className={style.Link} href="/Knowledge">knowledge Bank</Link>
            </div>
            <div className={style.box}>
            <Link className={style.Link} href="/Login">login </Link>
            </div>
            <div className={style.box}>
            <Link className={style.Link} href="/Square">FCD HR </Link>
            </div>
            
           
        </div>
       </div>
       <div className={style.dropdown}>
       <div  className={style.search}>
        <input className={style.src} type="text"  placeholder='search...'/>
       <div className={style.icon}>
        <AiOutlineSearch/>
       </div>
       </div>
       </div>
        
    </div>
     
     </>
   )
 }
 
 export default home