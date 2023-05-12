import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
    const navigate = useNavigate()
  return (
    <div>
              <div onClick={() => navigate(-1)} className="fixed font-bold bg-rose-500 bottom-[100px] right-[20px] text-white py-2 px-3 rounded-xl cursor-pointer">Go Back</div>
    </div>
  )
}

export default GoBack