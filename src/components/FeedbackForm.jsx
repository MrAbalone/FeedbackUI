import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(null);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  //fetch request.
  useEffect(() => {
    //feedbackEdit is an object with item & edit boolean
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (event) => {
    const { value } = event.target;
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How woud you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
