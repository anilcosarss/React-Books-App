import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BOOK_DETAILS_URL } from './API';
import { useAppContext } from './context/appContext'

const BookDetails = () => {

  const { id } = useParams();
  const [book, setBook] = useState({})
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}${id}`)
      .then((res) => {
        console.log(res.data)
        setBook(res.data)
      })
      .catch((err) => console.log(err));
  }, [id])
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }


  return (
    <>

      <div className='flex justify-center items-center gap-8'>
        <div className="flex flex-col justify-center items-center p-8 underline">
          <h2 className='mb-5 text-3xl font-bold'>{book.title}</h2>
          <img className='w-[250px] ' src={book.image_url} alt="#" />
        </div>
        <div className="flex flex-col w-[50%]">
          <h2 className='underline text-2xl font-bold mb-4'>Description</h2>
          <h4 className='text-lg leading-5'>{book.description}</h4>
          <h4 className='text-xl mt-16'><span className='italic text-lg font-bold'>Authors:</span> {book.authors}</h4>
          <h4 className='text-xl'><span className='italic text-lg font-bold'>Genres:</span> {book.genres}</h4>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {
          favoritesChecker(book.id) ?
            <button onClick={() => removeFromFavorites(book.id)} className='bg-rose-700 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded'>Remove from Favorites</button>
            :
            <button onClick={() => addToFavorites(book)} className='bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded'>Add to Favorites</button>

        }
      </div>
    </>
  )
}

export default BookDetails