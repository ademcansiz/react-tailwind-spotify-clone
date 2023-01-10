import { Icon } from 'Icons'
import { Range, getTrackBackground } from 'react-range'
import { useState } from 'react';

function Player() {

    const step = 0.1;
    const min = 0;
    const max = 100;
    const [values,setValues]=useState([50]);
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
            <button className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]'>
                <Icon size={16} name={"play"}></Icon>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"playerNext"}></Icon>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:opacity-100'>
                <Icon size={16} name={"repeat"}></Icon>
            </button>
        </div>
        <div className='w-full'>
        <Range
            values={values}
            step={step}
            min={min}
            max={max}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className="w-full h-7 flex group" style={props.style}>
                    <div ref={props.ref} className="h-1 w-full rounded-md self-center" 
                     style={{
                            background: getTrackBackground({
                                values: [values],
                                colors: ["#1db954", "#535353"],
                                min,
                                max 
                            })
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    className={`h-3 w-3 rounded-full transition-opacity bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
                    style={{
                        ...props.style,
                        boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)"
                    }}
                />
            )}
        />
        </div>
      </div>
      <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
        sağ
      </div>

    </div>
  )
}

export default Player
