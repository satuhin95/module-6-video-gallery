import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom';
import Player from '../components/description/Player'
import VedioDescription from '../components/description/VedioDescription'
import RelatedVedioList from '../components/list/RelatedVedioList'
import Loading from '../components/ui/Loading';
import { fetchVideo } from '../features/video/videoSlice'
export default function Vedio() {
  const dispatch = useDispatch();
  const {video,isLoading,isError, error} = useSelector((state)=> state.video)
  let { videoId } = useParams();

  const {id,link ,title,tags} = video || {};

  useEffect(()=>{
    dispatch(fetchVideo(videoId));
  },[dispatch,videoId]);

      // decide what to render 
      let content = null;
      if(isLoading) content = <Loading/>;
      if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
      if(!isLoading && !isError && !video?.id ) content = <div className="col-span-12">No video found!</div>;
      if(!isLoading && !isError && video){ 
          content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player link={link} title={title}/>
                        <VedioDescription video={video}/>
                    </div>


                    <RelatedVedioList currentVideoId={id} tags={tags}/>

                </div>
          )
      }
  return (
    <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
               {content}
            </div>
        </section>




  )
}
