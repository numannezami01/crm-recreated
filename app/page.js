 "use client"
 import Link from 'next/link';
 import React from 'react';
 import style from "./style.module.css";
 import Image from 'next/image';
 import {AiOutlineSearch} from "react-icons/Ai";
 import { useRouter } from 'next/navigation';
 import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

 
 const home= ({children}) => {
  const router = useRouter();
   
  const sales = [
    {
      href: '#',
      title: 'Add new PMR',
    },
  ];
  const prodTrack = [
    {
      href: '#',
      title: 'My Leads',
    },
    {
      href: '#',
      title: 'Input Report',
    },
  ];
  const perfTrack = [
    {
      href: '#',
      title: 'Sales Dashboard',
    },
  ];
  const reports = [
    {
      href: '#',
      title: 'MCF Reports'
    },
    {
      href: '#',
      title: 'ICF Reports'
    },
    {
      href: '#',
      title: 'Incentives'
    },
    {
      href: '#',
      title: 'Whitelisted Project List'
    }
  ];
  const hr = [
    {
      href: '#',
      title: 'HR Policies'
    },
    {
      href: '#',
      title: 'My Team'
    },
    {
      href: '#',
      title: 'Exit Requisition'
    },
    {
      href: '#',
      title: 'Payroll'
    },
  ];
   
   


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
       <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-00 sticky text-white top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-gray-00 w-full md:w-80 text-white font-normal'>
            <nav>
            <ul>
              <Link href= '/' className='flex flex-1 items-center justify-between px-3 font-normal transition-all hover:bg-gray-800'>Home</Link>
              <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
        <AccordionTrigger> Sales </AccordionTrigger>
              {sales.map(({ href, title }) => (
        <AccordionContent>
           <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
                  <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
                        router.asPath === href && 'bg-gray-800 text-white'
                      }`}>
                      {title}
                  </Link>
                </li>
        </AccordionContent>
              ))}
      </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
        <AccordionTrigger> Productivity Tracking </AccordionTrigger>
              {prodTrack.map(({ href, title }) => (
        <AccordionContent>
           <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
                  <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
                        router.asPath === href && 'bg-gray-800 text-white'
                      }`}>
                      {title}
                  </Link>
                </li>
        </AccordionContent>
              ))}
      </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
        <AccordionTrigger> Performance Tracking </AccordionTrigger>
              {perfTrack.map(({ href, title }) => (
        <AccordionContent>
           <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
                  <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
                        router.asPath === href && 'bg-gray-800 text-white'
                      }`}>
                      {title}
                  </Link>
                </li>
        </AccordionContent>
              ))}
      </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
        <AccordionTrigger> Reports </AccordionTrigger>
              {reports.map(({ href, title }) => (
        <AccordionContent>
           <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
                  <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
                        router.asPath === href && 'bg-gray-800 text-white'
                      }`}>
                      {title}
                  </Link>
                </li>
        </AccordionContent>
              ))}
      </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full">
       <AccordionItem value="item-1">
        <AccordionTrigger> HR </AccordionTrigger>
              {hr.map(({ href, title }) => (
        <AccordionContent>
           <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
                  <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
                        router.asPath === href && 'bg-gray-800 text-white'
                      }`}>
                      {title}
                  </Link>
                </li>
        </AccordionContent>
              ))}
      </AccordionItem>
                </Accordion>
            </ul>
          </nav>          
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>



       </div>
        
    </div>
     
     </>
   )
 }
 
 export default home