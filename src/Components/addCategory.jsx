import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/widgetControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../styles/addCategory.scss'

const AddCategory = () => {
 const [categoryName, setCategoryName]=useState('') 
 const dispatch = useDispatch()

    const handleAddCategory = (e)=>{
        e.preventDefault();
        if(categoryName.trim()){
            dispatch(addCategory(categoryName))
            setCategoryName('')
        }
    }

  return (
    <div className="add-category-container">
      <form onSubmit={handleAddCategory} className="add-category-form">
        <input className="add-category-input"
         type='text'
         value={categoryName}
         onChange={(e)=>setCategoryName(e.target.value)}
         placeholder='Type here to add a new category...'
         required>

         </input>
       <button type="submit" className="add-category-button">
          <FontAwesomeIcon icon={faCheck} />
        </button>    

      </form>
    </div>
  )
}

export default AddCategory
