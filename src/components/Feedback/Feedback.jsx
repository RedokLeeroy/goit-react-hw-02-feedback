      export const FeedbackOptions = ({onLeaveFeedback}) =><div>
        <button name="good" onClick={onLeaveFeedback}>Good</button>
        <button name="neutral" onClick={onLeaveFeedback}>Neutral</button>
        <button name="bad" onClick={onLeaveFeedback}>Bad</button>
      </div>