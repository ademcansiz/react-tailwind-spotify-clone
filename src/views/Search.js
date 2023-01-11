import React, { useRef, useEffect , useState} from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favCategories from 'data/fav-categories'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from 'Icons'

function Category({category}) {
  return (
    <div style={{"background":category.color}} className="rounded-md before:pt-[100%] before:block relative overflow-hidden ">
      <div className='absolute inset-0'>
        <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
          {category.title}
        </h3>
        <img src={category.cover} className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"></img>
      </div>
    </div>
  )
}

function FavCategory({category}) {
  return (
    <div style={{"background":category.color}} className="flex-shrink-0 rounded-lg relative overflow-hidden w-[27.375rem] h-[13.75rem] ">
      <div className='absolute inset-0'>
        <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>
          {category.title}
        </h3>
        <img src={category.cover} className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"></img>
      </div>
    </div>
  )
}

function Search() {
  const favoritesRef = useRef()
  const [prev,setPrev] = useState(false)
  const [next,setNext] = useState(false)


      useEffect(() => {
        if (favoritesRef.current) {

          const scrollHandle = () => {
            const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
            const isBegin = favoritesRef.current.scrollLeft === 0
            setPrev(!isBegin)
            setNext(!isEnd)
          }

          scrollHandle()
          favoritesRef.current.addEventListener('scroll', scrollHandle)

          return () => {
            favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
          }

        }
	}, [favoritesRef])

      const slideNext =()=>{
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200
      }
      const slidePrev =()=>{
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200
      }
  return (
    <>
      <section className="mb-8">
				<Title title="En çok dinlediğin türler" />
				<div className="relative">
					{prev && <button className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slidePrev}><Icon name="left" size={24} /></button>}
					{next && <button className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"  onClick={slideNext}><Icon name="right" size={24} /></button>}
					<ScrollContainer
						innerRef={favoritesRef}
						className="flex scrollable overflow-x gap-x-6"
					>
						{favCategories.map((category, index) => <FavCategory key={index} category={category}/>)}
					</ScrollContainer>
				</div>
			</section>
      <section>
        <Title title={"Hepsine göz at"}></Title>
        <div className='grid grid-cols-5 gap-6'>
          {categories.map((category,index)=><Category key={index} category={category}></Category>)}
        </div>
      </section>
    </>
   
  )
}

export default Search
