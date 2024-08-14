import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCategory } from "../Store/widgetControl";
import {Widget} from "./widget";
import AddCategory from   "./addCategory";
import AddWidget from "./addWidget";
import '../styles/dashboard.scss'

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets
      .filter(
        (widget) =>
          widget.name.toLowerCase().includes(search.toLowerCase()) ||
          widget.text.toLowerCase().includes(search.toLowerCase())
      )
      .map((widget) => ({ ...widget, categoryId: category.id }))
  );

  return (
    <div className="dashboard-container">
      <AddCategory />

      <input //to search widgets
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search widgets..."
      />

      {search ? (
        filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <Widget
              key={widget.id}
              categoryId={widget.categoryId}
              widget={widget}
            />
          ))
        ) : (
          <p>No widgets found.</p>
        )
      ) : (
        categories.map((category) => (
          <div  className="category-title" key={category.id}>
            <h3>{category.name}</h3>
            <button onClick={() => handleRemoveCategory(category.id)}>
              Remove Category
            </button>
            <AddWidget categoryId={category.id} />
            <div className="widget-card">
              {category.widgets.map((widget) => (
                <Widget
                  key={widget.id}
                  categoryId={category.id}
                  widget={widget}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
