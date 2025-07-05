import React,{useState,useRef} from 'react'
import { ArrowLeft, MessageSquareText, MoreVertical, ThumbsDown, ThumbsUp, Send, User, Pause, Play} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion";


const VideoPlayer = ({src, id}) => {

    const [playing, setPlaying] = useState(false)
    const [showIcon, setShowIcon] = useState(false)
    const videoRef = useRef()

    const handlePlay = () => {
        const video = videoRef.current;

        if(video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }

        //show the icon, needi for short period of time
        setShowIcon(true);
        setTimeout(() => {
            setShowIcon(false);
        }, 1000);
    };

    //Icon to toggle between play & pause
    const Icon = playing ? Pause : Play

  return (
    <div className='video'>

        {/* play & pause icon*/}
        <AnimatePresence>
            {showIcon && (
            <motion.div 
            initial={{opacity: 0, scale:0}}
            animate={{opacity: 1,scale:1}}
            exit={{opacity: 0,scale:0}}
            className="playPause">
            <div className="icon">
                <Icon size={40} />
            </div>
        </motion.div>
        )}
        </AnimatePresence>
        <video src={src}
    className='video_player' loop onClick={handlePlay} autoPlay muted ref={videoRef}/>
    
    <div className='shortsContainer'>
        <div className='shortsVideoTop'>
            <div className='shortsVideoTopIcon'>
               <ArrowLeft /> 
            </div>

            <div className='shortsVideoTopIcon'>
               <MoreVertical /> 
            </div>
        </div>

        {/* side icons section */}
        <div className='shortsVideoSideIcons'>
            <div className='shortVideoSideIcon'>
                <ThumbsUp />
                <p>600</p>
            </div>

            <div className='shortVideoSideIcon'>
                <ThumbsDown />
                <p>600</p>
            </div>

            <div className='shortVideoSideIcon'>
                <MessageSquareText />
                <p>600</p>
            </div>

            <div className='shortVideoSideIcon'>
                <Send />
                <p>600</p>
            </div>
        </div>
    </div>

    {/* bottom, section */}
    <div className='shortsBottom'>
        <div className="shortDesc">
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem illum incidunt aut possimus 
            </p>
        </div>

        <div className="shortDetails">
            <div className="avatar">
                <User />
            </div>

            <p>Channel Name</p>
            <button type="button">Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default VideoPlayer