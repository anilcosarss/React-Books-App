import React, { useState, useEffect } from 'react'
import { API_URL } from './API'
import axios from 'axios'
import { useAppContext } from './context/appContext'
import { useNavigate } from 'react-router-dom'


const BookList = () => {
  const [books, setBooks] = useState([])

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }


  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setBooks(res.data)
      })
      .catch(err => console.log(err));

  }, [])


  return (
    <div className='flex flex-wrap items-center justify-center pb-20 pt-5 gap-x-5 gap-y-8 max-w-[80%] mx-auto'>
      {books.map((book) => (
        <div key={book.id} className="lg:w-[22%] md:w-[30%] sm:w-[48%] w-[91%] border border-xl  shadow-xl">
          <div className="flex flex-col justify-center items-center gap-5 py-2 px-2">
            <div className="flex items-center h-16">
            <h2 className='text-xl font-bold text-center'>{book.title}</h2>
            </div>
            <div className='flex justify-center'>
              <img  onClick={() => navigate(`/books/${book.id}`)}  className="w-[80%] rounded-xl min-w-[200px] h-[300px]  hover:shadow-lg" src={book.image_url} alt="#" />
            </div>
            <div className="">
              {
                favoritesChecker(book.id) ?
                  <button onClick={() => removeFromFavorites(book.id)} className='bg-rose-700 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded'>Remove from Favorites</button>
                  :
                  <button onClick={() => addToFavorites(book)} className='bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded'>Add to Favorites</button>

              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList