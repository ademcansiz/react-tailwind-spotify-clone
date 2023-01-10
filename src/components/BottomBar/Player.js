import { Icon } from 'Icons'
import { Range, getTrackBackground } from 'react-range'
import { useMemo, useState } from 'react';
import {useAudio} from 'react-use';
import SecondsToTime from 'components/Utils';
import CustomRange from "../CustomRange"

function Player() {
    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        autoPlay: true,
      });

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
        sol
      </div>
      <div className='flex flex-col items-center max-w-[45.125rem] w-[40%]'>
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
