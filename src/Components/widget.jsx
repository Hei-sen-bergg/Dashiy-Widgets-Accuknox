import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../Store/widgetControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "../styles/widget.scss";

export const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget-card">
      <h3 className="widget-title">{widget.name}</h3>
      <p className="widget-content">{widget.text}</p>
      <FontAwesomeIcon
                icon={faXmark}
                className="remove-widget-icon"
                onClick={handleRemove}
            />
    </div>
  );
};
