import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 2, 
      name: "Project Management", 
      widgets: [
        {
          id: 201, 
          name: "Tasks Overview", 
          text: "Total: 45, Completed: 30, In Progress: 10, Pending: 5", 
        },
        {
          id: 202, 
          name: "Team Members", 
          text: "John Doe, Jane Smith, Mike Johnson, Emily Davis", 
        },
      ],
    },
    {
      id: 3, 
      name: "Marketing Campaigns", 
      widgets: [
        {
          id: 301, 
          name: "Campaign Performance", 
          text: "Active: 3, Completed: 7, Planned: 5", 
        },
        {
          id: 302, 
          name: "Budget Overview", 
          text: "Total Budget: $50,000, Spent: $35,000, Remaining: $15,000",
        },
      ],
    },
  ]  
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