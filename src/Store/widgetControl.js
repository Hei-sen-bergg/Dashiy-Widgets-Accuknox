import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
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
        },
        addCategory:(state,action)=>{
          const newCategory = {
            id:Date.now(),
            name:action.payload,
            widgets:[],
          }
          state.categories.push(newCategory)
        },
        removeCategory:(state,action)=>{
          state.categories = state.categories.filter(cat => cat.id !== action.payload)
        }
    }
})

export const {addWidget,removeWidget, addCategory, removeCategory} = widgetSlice.actions;
export default widgetSlice.reducer 