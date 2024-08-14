import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/widgetControl'


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
    <div>
      <form onSubmit={handleAddCategory}>
        <input
         type='text'
         value={categoryName}
         onChange={(e)=>setCategoryName(e.target.value)}
         placeholder='Enter category name'
         required
        />
        <button type='submit'>Add Category</button>

      </form>
    </div>
  )
}

export default AddCategory
