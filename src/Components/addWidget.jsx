import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../Store/widgetControl";
import '../styles/addWidget.scss'

const AddWidget = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
    setIsPopupOpen(false)
  };

  return (
    <div className="add-widget-container">
      <div
        className="add-widget-card"
        onClick={() => setIsPopupOpen(true)}
      >
        <span className="add-widget-icon">+</span>
        <span className="add-widget-placeholder">Add Widget</span>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <form onSubmit={handleSubmit}>
              <input className="widget-name"
                type="text"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                placeholder="Enter your widget name"
                required
              />
              <input className="widget-text"
                type="text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                placeholder="Enter your widget name"
                required
              />
              <button className="widget-add" type="submit">Add Widget</button>
            <button className="close-popup" onClick={() => setIsPopupOpen(false)}>
              Close
            </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWidget;
