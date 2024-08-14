import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../Store/widgetControl'

const Widget = ({widget, categoryId}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeWidget({categoryId, widgetId : widget.id}))
    }

  return (
    <div>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>Remove Widget</button>
    </div>
  )
}

export default Widget
