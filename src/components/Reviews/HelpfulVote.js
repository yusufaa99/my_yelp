import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateReview } from "../../graphql/mutations";
import styles from "./HelpfulVote.module.css";

export function HelpfulVote({ reviewId, votes }) {
  const [helpfulVotes, setHelpfulVotes] = useState(votes);
  const [voted, setVoted] = useState(false);

  async function handleVote() {
    if (voted) return; // Prevent multiple votes

    try {
      const updatedVotes = helpfulVotes + 1;
      await API.graphql(
        graphqlOperation(updateReview, { input: { id: reviewId, helpfulVotes: updatedVotes } })
      );
      setHelpfulVotes(updatedVotes);
      setVoted(true);
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  }

  return (
    <div className={styles.helpfulVote}>
      <button onClick={handleVote} className="btn-secondary" disabled={voted}>
        {voted ? "Voted ✔" : `Helpful (${helpfulVotes})`}
      </button>
    </div>
  );
}
