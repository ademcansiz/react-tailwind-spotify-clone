import React from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favCategories from 'data/fav-categories'
import ScrollContainer from 'react-indiana-drag-scroll'

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
  return (
    <>
      <section className='mb-4 '>
        <Title title={"En çok dinlediğin türler"}></Title>
        <ScrollContainer  className='flex overflow-x gap-x-6'>
          {favCategories.map((category,index)=><FavCategory key={index} category={category}></FavCategory>)}
        </ScrollContainer>
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
