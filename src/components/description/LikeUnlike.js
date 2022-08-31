import React from 'react'
import {useDispatch} from 'react-redux'
import likeImg from '../../assets/like.svg'
import unlikeImg from '../../assets/unlike.svg'
import { likedVedio,unlikedVedio } from '../../features/video/videoSlice';

export default function LikeUnlike({likes,unlikes,id}) {
    const dispatch = useDispatch()
    const likeHandler=(id)=>{
        dispatch(likedVedio(id))
    }
    const unlikeHandler=(id)=>{
        dispatch(unlikedVedio(id))
    }
  return (
    <div className="flex gap-10 w-48">
            <div className="flex gap-1 cursor-pointer" onClick={()=>likeHandler(id)}>
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={likeImg}
                        alt="Like"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600 "
                >
                    {likes}
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer" onClick={()=>unlikeHandler(id)}>
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={unlikeImg}
                        alt="Unlike"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600 "
                >
                    {unlikes}
                </div>
            </div>
        </div>
  )
}
