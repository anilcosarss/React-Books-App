import React from 'react'
import { useAppContext } from './context/appContext'
import { NavLink, useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }
  const navigate = useNavigate()


  return (
    <>
      {favorites.length > 0 ? (
        <div className='flex flex-wrap items-center justify-center  pb-20 pt-5 gap-5'>
          {favorites.map((book) => (
            <div key={book.id} className="lg:w-[22%] md:w-[30%] sm:w-[48%] w-[91%] border border-xl  shadow-xl">
              <div className="flex flex-col justify-center items-center gap-5 py-2 px-2">
                <div className="flex items-center h-16">
                  <h2 className='text-xl font-bold text-center border px-5 py-2'>{book.title}</h2>
                </div>
                <div className='flex justify-center'>
                  <img onClick={() => navigate(`books/${book.id}`)} className="w-[80%]  min-w-[250px] h-[350px]  hover:shadow-lg" src={book.image_url} alt="#" />
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
      ) : (
        <div>
        <p className='text-center text-5xl py-16 font-bold'>You didn't add any book to Your Favorites!</p>
         <p className='text-center text-3xl py-16 font-bold'>Please <NavLink to='/' className='bg-zinc-900 text-white text-2xl px-3 rounded-xl'>Click Here</NavLink> to choose a book !</p>
        </div>
        
      )}

    </>
  )
}

export default Favorites