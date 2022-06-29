import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((element) => (
          <motion.div
            key={element.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={element.id}
              element={element}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
