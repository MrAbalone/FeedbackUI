import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ element }) {
  //getting deleteFeedback and editFeedback func from context
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{element.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(element.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => {
          // console.log(element)
          editFeedback(element);
        }}
        className="edit"
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{element.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  element: PropTypes.object.isRequired,
};

export default FeedbackItem;
