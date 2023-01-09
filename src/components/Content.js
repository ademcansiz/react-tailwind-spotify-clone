import React from 'react'
import Navbar from "components/Navbar";
import { Routes,Route} from 'react-router-dom';
import Home from 'views/Home';
import Search from 'views/Search';
import Books from 'views/Books';

function Content() {
  return (
    <main className='flex-auto overflow-auto'>
      <Navbar></Navbar>
      <div className='text-white px-8 py-5'>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/search' element={<Search />}>
          </Route>
          <Route path='/books' element={<Books />}>
          </Route>
        </Routes>
      </div>
    </main>
  )
}

export default Content
