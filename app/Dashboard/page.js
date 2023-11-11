// 'use client'
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// const Layout = ({ children }) => {
//   const router = useRouter();

  
//   const sales = [
//     {
//       href: '#',
//       title: 'Add new PMR',
//     },
//   ];
//   const prodTrack = [
//     {
//       href: '#',
//       title: 'My Leads',
//     },
//     {
//       href: '#',
//       title: 'Input Report',
//     },
//   ];
//   const perfTrack = [
//     {
//       href: '#',
//       title: 'Sales Dashboard',
//     },
//   ];
//   const reports = [
//     {
//       href: '#',
//       title: 'MCF Reports'
//     },
//     {
//       href: '#',
//       title: 'ICF Reports'
//     },
//     {
//       href: '#',
//       title: 'Incentives'
//     },
//     {
//       href: '#',
//       title: 'Whitelisted Project List'
//     }
//   ];
//   const hr = [
//     {
//       href: '#',
//       title: 'HR Policies'
//     },
//     {
//       href: '#',
//       title: 'My Team'
//     },
//     {
//       href: '#',
//       title: 'Exit Requisition'
//     },
//     {
//       href: '#',
//       title: 'Payroll'
//     },
//   ];

//   return (
//     <div className='min-h-screen flex flex-col'>
//       <header className='bg-gray-700 sticky text-white top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        
//       </header>
//       <div className='flex flex-col md:flex-row flex-1'>
//         <aside className='bg-gray-700 w-full md:w-60 text-white font-normal'>
//             <nav>
//             <ul>
//               <Link href= '/' className='flex flex-1 items-center justify-between px-3 font-normal transition-all hover:bg-gray-800'>Home</Link>
//               <Accordion type="single" collapsible className="w-full">
//        <AccordionItem value="item-1">
//         <AccordionTrigger> Sales </AccordionTrigger>
//               {sales.map(({ href, title }) => (
//         <AccordionContent>
//            <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
//                   <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
//                         router.asPath === href && 'bg-gray-800 text-white'
//                       }`}>
//                       {title}
//                   </Link>
//                 </li>
//         </AccordionContent>
//               ))}
//       </AccordionItem>
//                 </Accordion>
//                 <Accordion type="single" collapsible className="w-full">
//        <AccordionItem value="item-1">
//         <AccordionTrigger> Productivity Tracking </AccordionTrigger>
//               {prodTrack.map(({ href, title }) => (
//         <AccordionContent>
//            <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
//                   <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
//                         router.asPath === href && 'bg-gray-800 text-white'
//                       }`}>
//                       {title}
//                   </Link>
//                 </li>
//         </AccordionContent>
//               ))}
//       </AccordionItem>
//                 </Accordion>
//                 <Accordion type="single" collapsible className="w-full">
//        <AccordionItem value="item-1">
//         <AccordionTrigger> Performance Tracking </AccordionTrigger>
//               {perfTrack.map(({ href, title }) => (
//         <AccordionContent>
//            <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
//                   <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
//                         router.asPath === href && 'bg-gray-800 text-white'
//                       }`}>
//                       {title}
//                   </Link>
//                 </li>
//         </AccordionContent>
//               ))}
//       </AccordionItem>
//                 </Accordion>
//                 <Accordion type="single" collapsible className="w-full">
//        <AccordionItem value="item-1">
//         <AccordionTrigger> Reports </AccordionTrigger>
//               {reports.map(({ href, title }) => (
//         <AccordionContent>
//            <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
//                   <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
//                         router.asPath === href && 'bg-gray-800 text-white'
//                       }`}>
//                       {title}
//                   </Link>
//                 </li>
//         </AccordionContent>
//               ))}
//       </AccordionItem>
//                 </Accordion>
//                 <Accordion type="single" collapsible className="w-full">
//        <AccordionItem value="item-1">
//         <AccordionTrigger> HR </AccordionTrigger>
//               {hr.map(({ href, title }) => (
//         <AccordionContent>
//            <li className='px-5 flex flex-1 items-center justify-between font-normal transition-all hover:bg-gray-800' key={title}>
//                   <Link href={href}  className={`flex hover:bg-gray-800 cursor-pointer ${
//                         router.asPath === href && 'bg-gray-800 text-white'
//                       }`}>
//                       {title}
//                   </Link>
//                 </li>
//         </AccordionContent>
//               ))}
//       </AccordionItem>
//                 </Accordion>
//             </ul>
//           </nav>          
//         </aside>
//         <main className='flex-1'>{children}</main>
//       </div>
//     </div>
//   );
// }

// export default Layout