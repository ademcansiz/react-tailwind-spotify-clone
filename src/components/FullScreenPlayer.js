import {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'Icons'
import SecondsToTime from 'components/Utils';
import CustomRange from "./CustomRange"

function FullScreenPlayer({toggle,controls,state}) {
  const {current} =useSelector(state=>state.player)
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
    <div className='h-full relative flex '>    
      <div className='absolute inset-0 object-cover bg-cover bg-center blur-md opacity-30' style={{backgroundImage:`url(${current.image})`}}></div>
      
      <div className='absolute top-10 left-8 text-white gap-x-2 opacity-60 text-xs flex items-center'>
        <Icon name={"logo"} size={34}></Icon>
        <div>
          <h6>PLAYING FOR PLAYLIST</h6>
          <p>{current.description}</p>
        </div>
      </div>

      <div className='absolute left-8 bottom-36 flex items-center gap-x-4'>
        <img src={current.image} className='w-24 h-24 object-cover'></img>
        <div className='self-end'>
          <h3 className='font-semibold text-3xl '>{current.title}</h3>
          <p className='text-sm opacity-50'>{current.description}</p>
        </div>
      </div>
      
      <div className='flex flex-col items-center  w-full px-8 absolute bottom-4'>

          <div className='w-full flex items-center mb-1.5 gap-x-2'>
              <div className='text-[0.688rem] text-white text-opacity-70'>
              {SecondsToTime(state?.time)}
              </div>
              <CustomRange step={0.1} min={0} max={state?.duration || 1} value={state?.time} onChange={value=> controls.seek(value)}  ></CustomRange>
              <div className='text-[0.688rem] text-white text-opacity-70'>
                  {SecondsToTime(state?.duration)}
              </div>
          </div>

          <div className='flex justify-center w-full items-center '>

            {/* orta */}
            <div className='flex items-center justify-center gap-x-6'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                    <Icon size={24} name={"shuffle"}></Icon>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                    <Icon size={24} name={"playerPrev"}></Icon>
                </button>
                <button onClick={controls[state?.playing ? "pause" : "play"]} className='w-16 h-16 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'>
                    <Icon size={24} name={state?.playing ? "pause" : "play"}></Icon>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                    <Icon size={24} name={"playerNext"}></Icon>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                    <Icon size={24} name={"repeat"}></Icon>
                </button>
            </div>
            {/* sağ */}
            <div className='flex items-center absolute top-12 right-6 gap-x-2 justify-center'>
                <button onClick={controls[state.muted ? "unmute" : "mute"]} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                    <Icon size={16} name={volumeIcon}></Icon>
                </button>
                <div className='max-w-full w-[5.813rem]'>
                <CustomRange step={0.01} min={0} max={1} value={state.muted ? 0 : state?.volume} onChange={value=> {
                  controls.unmute()
                  controls.volume(value)
                  }}>
                </CustomRange>
                </div>
                <button onClick={()=>toggle()} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                      <Icon size={24} name={"fullOff"}></Icon>
                </button>
            </div>

          </div>
    

      </div>
     
    </div>
  )
}

export default FullScreenPlayer
