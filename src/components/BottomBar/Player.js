import { Icon } from 'Icons'
import { Range, getTrackBackground } from 'react-range'
import { useMemo, useState,useEffect } from 'react';
import {useAudio} from 'react-use';
import SecondsToTime from 'components/Utils';
import CustomRange from "../CustomRange"
import { useDispatch, useSelector } from 'react-redux';
import { setControls,setPlaying,setSideBar } from 'stores/PlayerSlice';

function Player() {

  const {current, sidebar} = useSelector(state => state.player)
  const dispatch = useDispatch();
    const [audio, state, controls, ref] = useAudio({
        src: current?.src,
        autoPlay: true,
      });

      useEffect(() => {
        controls.play()
       }, [current]);

       useEffect(()=>{
          dispatch(setPlaying(state.playing))
       },[state.playing])

      useEffect(() => {
       dispatch(setControls(controls))
      }, []);

      const volumeIcon = useMemo(()=>{
        if (state.volume == 0 || state.muted ) {
                return "volumeMuted"
        }
        if (state.volume > 0 && state.volume < 0.33) {
            return "volumeLow"
        }   
        if (state.volume >= 0.33 && state.volume < 0.66) {
        return "volumeNormal"
        }
        return "volumeFull"
      })


  return (
    <div className='flex items-center justify-between h-full px-4 text-white'>
      <div className='min-w-[11.25rem] w-[30%] '>
        {current && 
             <div className='flex items-center'>
                <div className='flex items-center mr-3'>
                {!sidebar && 
                    <div className='w-14 h-14 mr-3 flex-shrink-0 relative group'>
                    <img src={current.image}></img>
                    <button onClick={()=>dispatch(setSideBar(true))} className='w-6 h-6 bg-black rotate-90 opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 bg-opacity-80 flex items-center justify-center'>
                      <Icon name={"arrowLeft"} size={16}></Icon>
                    </button>
                    </div>
                  }
                  <div>
                    <h6 className='text-sm line-clamp-1 font-semibold'>{current.title}</h6>
                    <p className='text-[0.688rem] text-white text-opacity-70'>{current.description}</p>
                  </div>
                </div>
                <button className='ml-2 w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                  <Icon size={16} name={"heart"}></Icon>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                  <Icon size={16} name={"pictureInPicture"}></Icon>
                </button>
            </div>
        }
      </div>
      
      <div className='flex flex-col items-center max-w-[45.125rem] px-4 w-[40%]'>
        <div className='flex items-center gap-x-2'>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"shuffle"}></Icon>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"playerPrev"}></Icon>
            </button>
            <button onClick={controls[state?.playing ? "pause" : "play"]} className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'>
                <Icon size={16} name={state?.playing ? "pause" : "play"}></Icon>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"playerNext"}></Icon>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"repeat"}></Icon>
            </button>
        </div>
        <div className='w-full flex items-center gap-x-2'>
            {audio}
            <div className='text-[0.688rem] text-white text-opacity-70'>
            {SecondsToTime(state?.time)}
            </div>
            <CustomRange step={0.1} min={0} max={state?.duration || 1} value={state?.time} onChange={value=> controls.seek(value)}  ></CustomRange>
        <div className='text-[0.688rem] text-white text-opacity-70'>
            {SecondsToTime(state?.duration)}
        </div>
        </div>
      </div>
      <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"lyrics"}></Icon>
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"queue"}></Icon>
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"device"}></Icon>
        </button>
        <button onClick={controls[state.muted ? "unmute" : "mute"]} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={volumeIcon}></Icon>
        </button>
        <div className='max-w-full w-[5.813rem]'>
        <CustomRange step={0.01} min={0} max={1} value={state.muted ? 0 : state?.volume} onChange={value=> {
            controls.unmute()
            controls.volume(value)
            }}  ></CustomRange>
        </div>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"full"}></Icon>
        </button>
      </div>

    </div>
  )
}

export default Player
