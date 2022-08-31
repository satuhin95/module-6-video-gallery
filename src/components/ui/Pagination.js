import React, { useState } from 'react'

export default function Pagination({pages,setPage}) {
//     const arr = Array.from(Array(pages).keys())
    const [active, setActive]= useState(1)

    const pageHandler =(e)=>{
      setPage(e.target.textContent);
      setActive(e.target.textContent);
    }
  return (
    <section className="pt-12">
    <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
    >
       {/* {arr?.map((item)=>(
        <div key={item} className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" onClick={(e)=>setPage(e.target.textContent)}>
             {item + 1}
        </div>
       ))} */}

        <div className={`${active==1?'bg-blue-600':'bg-blue-100'} text-white px-4 py-1 rounded-full cursor-pointer`} onClick={pageHandler}>
             1
        </div>
        <div className={`${active==2?'bg-blue-600':'bg-blue-100'} text-white px-4 py-1 rounded-full cursor-pointer`} onClick={pageHandler}>
             2
        </div>
        <div className={`${active==3?'bg-blue-600':'bg-blue-100'} text-white px-4 py-1 rounded-full cursor-pointer`} onClick={pageHandler}>
             3
        </div>
        



        

        

        

    </div>
</section>
  )
}
