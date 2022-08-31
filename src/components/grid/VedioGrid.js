import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VedioGridItem from './VedioGridItem'
import { fetchVideos } from '../../features/videos/videosSlice'
import Loading from '../ui/Loading';
import Pagination from '../ui/Pagination';
export default function VedioGrid() {
    const dispatch = useDispatch();
    const  {videos, isLoading, isError, error}= useSelector((state)=>state.videos)
    const {tags, search ,author} = useSelector((state)=>state.filter)
    const [page, setPage] = useState(1);
    useEffect(()=>{
        dispatch(fetchVideos({tags,search ,author,page}))
    },[dispatch,tags,search,author,page]);

    // decide what to render 
    let content;
    if(isLoading) content = <Loading/>;
    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if(!isLoading && !isError && videos?.length === 0) content = <div className="col-span-12">No videos found!</div>;
    if(!isLoading && !isError && videos?.length > 0){ 
        content = videos.map(video=>(
            <VedioGridItem video={video} key={video.id}/>
        ))
    }

  return (
    <>
    <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                 {content}

                </div>
            </section>
        </section>
        <Pagination setPage={setPage} pages={ Math.ceil(videos?.length / 4)}/>
        </>
  )
}
