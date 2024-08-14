import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../Store/widgetControl'
import '../styles/widget.scss'

export const Widget = ({widget, categoryId}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeWidget({categoryId, widgetId : widget.id}))
    }

  return (
    <div>
      <h3 className="widget-title">{widget.name}</h3>
      <p className="widget-content">{widget.text}</p>
      <button className="add-widget-btn" onClick={handleRemove}>Remove Widget</button>
    </div>
  )
}


