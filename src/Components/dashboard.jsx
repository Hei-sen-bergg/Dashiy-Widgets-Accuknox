import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCategory } from "../Store/widgetControl";
import { Widget } from "./widget";
import AddCategory from "./addCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AddWidget from "./addWidget";
import "../styles/dashboard.scss";

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
      <header className="header">
        <h1 className="dashboard-title">Dashboard</h1>
        <input
          className="search-widget"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search widgets..."
        />
      </header>

      {!search && <AddCategory />}

      {search ? (
        filteredWidgets.length > 0 ? (
          <div className="widgets-row">
          {filteredWidgets.map((widget) => (
            <Widget
              key={widget.id}
              categoryId={widget.categoryId}
              widget={widget}
            />
          ))}
        </div>
         
        ) : (
          <p>No widgets found.</p>
        )
      ) : (
        categories.map((category) => (
          <div className="category-container" key={category.id}>
            <div className="category-header">
              <h3 className="category-title">{category.name}</h3>
              <FontAwesomeIcon
                icon={faXmark}
                className="remove-category-icon"
                onClick={() => handleRemoveCategory(category.id)}
              />
            </div>
            <div className="widgets-row">
              {category.widgets.map((widget) => (
                <Widget
                  key={widget.id}
                  categoryId={category.id}
                  widget={widget}
                />
              ))}
              <AddWidget categoryId={category.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
