import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';
import RelatedVedio from './RelatedVedio'

export default function RelatedVedioList({currentVideoId, tags}) {
  const dispatch = useDispatch();
  const {relatedVideos, isLoading, isError, error} = useSelector((state)=>state.relatedVideos)
  useEffect(()=>{
    dispatch(fetchRelatedVideos({tags,id:currentVideoId}))
  },[dispatch,tags,currentVideoId]);

      // decide what to render 
      let content;
      if(isLoading) content = <Loading/>;
      if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
      if(!isLoading && !isError && relatedVideos?.length === 0) content = <div className="col-span-12">No Related videos found!</div>;
      if(!isLoading && !isError && relatedVideos?.length > 0){ 
          content = relatedVideos.map(video=>(
              <RelatedVedio video={video} key={video.id}/>
          ))
      }
  
  return (
    <div
    className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
>
      {content}
</div>
  )
}
