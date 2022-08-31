import React, { useEffect } from 'react'
import Tag from './Tag'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../ui/Loading';
import { resetFilter } from '../../features/filter/filterSlice';
export default function Tags() {
  const dispatch = useDispatch();
  const  {tags, isLoading, isError}= useSelector((state)=>state.tags)
  const  filter = useSelector((state)=>state.filter );
  const isSearch = filter.tags.length > 0 || filter.search || filter.author ;
  useEffect(()=>{
    dispatch(fetchTags())
  },[dispatch]);

  let content;
  if(isLoading) content = <Loading/>
  if(!isLoading && !isError && tags?.length === 0) content = "";
  if(!isLoading && !isError && tags?.length > 0){ 
      content = tags.map(tag=>(
          <Tag title={tag.title} key={tag.id}/>
      ))
  }
  const resetHandler =()=>{
    dispatch(resetFilter())
  }
  return (
    <section >
    <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
    >

       {content}
       {isSearch && (
        <button className='bg-red-200  ml-5 px-4 py-1   rounded-full cursor-pointer ' onClick={resetHandler} >Reset</button>
       )}
    </div>
    
 
</section>
  )
}
