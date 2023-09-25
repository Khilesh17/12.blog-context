import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  const { page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className='footer'>
      <div className='container'>
        <div> 
          {
            page > 1 &&
            <button className='btn' onClick={()=>handlePageChange(page-1)}>Previous</button>
          }
          {
            page < totalPages &&
            <button className='btn' onClick={()=>handlePageChange(page+1)}>Next</button>
          }
        </div>

        <div>
          Page {page} of {totalPages}
        </div>
      </div>
    </div>
  )
}
