import React from 'react'
import Navbar from "components/Navbar";
import { Routes,Route} from 'react-router-dom';
import Home from 'views/Home';
import Search from 'views/Search';
import Books from 'views/Books';

function Content() {
  return (
    <main className='flex-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/search' element={<Search />}>
        </Route>
        <Route path='/books' element={<Books />}>
        </Route>
      </Routes>
    </main>
  )
}

export default Content
