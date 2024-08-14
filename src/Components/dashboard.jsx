import React from 'react'
import { useSelector } from 'react-redux'
import Widget from './widget'
import AddWidget from './addWidget'


const Dashboard = () => {
    const categories = useSelector((state)=>state.widgets.categories)
  return (
    <div>
        {categories.map((category)=>(
            <div key={category.id}>
                <h2>{category.name}</h2>
                <div>
                    {category.widgets.map((widget)=>(
                        <Widget key={widget.id} widget={widget} categoryId={category.id}/>
                    ))}
                </div>
                <AddWidget categoryId={category.id}/>
                </div>
        ))}
    </div>
  )
}

export default Dashboard
