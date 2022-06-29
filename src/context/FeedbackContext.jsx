import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from feedback1",
      rating: 3,
    },
    {
      id: 2,
      text: "This item is from feedback2",
      rating: 2,
    },
    {
      id: 3,
      text: "This item is from feedback2",
      rating: 1,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //for delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };
  //to add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };
  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //update data
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((element) =>
        element.id === id ? { element, ...updItem } : element
      )
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit, //passing boolean to
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
