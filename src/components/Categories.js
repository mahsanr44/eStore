import React from 'react'

const Categories = ({id, title, onCategoryClick}) => {
  return (
    <div className='justify-start flex px-4 py-4 text-lg font-semibold bg-cyan-200 '> 
    <div key={id}>
            <button className='py-0.5'
            onClick={()=>onCategoryClick()}>
            {title}
            </button>
          </div>
    </div>
  )
}

export default Categories
