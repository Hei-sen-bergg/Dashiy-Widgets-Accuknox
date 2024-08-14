import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../Store/widgetControl";

const AddWidget = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Name your widget"
          required
        />
        <input
          type="text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          placeholder="Name your widget"
          required
        />
        <button type="submit">Add Widget</button>
        
      </form>
    </div>
  );
};

export default AddWidget;
