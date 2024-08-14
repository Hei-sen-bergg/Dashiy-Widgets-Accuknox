import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Exclusive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Widget 1",
          text: "Random text 1",
        },
        {
          id: 2,
          name: "Widget 2",
          text: "Random text 2",
        },
      ],
    },
  ],
};


const widgetSlice = createSlice({
    name:'widgets',
    initialState,
    reducers:{
        addWidget:(state,action) =>{
            const {categoryId,widget} = action.payload;
            const category = state.categories.find(cat=> cat.id === categoryId)
            if(category){
                category.widgets.push(widget)
            }
        },
        removeWidget:(state, action) => {
             const {categoryId,widgetId} = action.payload;
            const category = state.categories.find(cat=> cat.id === categoryId)
            if (category){
                category.widgets = category.widgets.filter(widget=> widget.id !== widgetId)
            }
        }
    }
})

export const {addWidget,removeWidget} = widgetSlice.actions;
export default widgetSlice.reducer 