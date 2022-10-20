import React from 'react';
import css from './Feedback.module.css';

export const Feedback = ({ handleOnGood, handleOnNeutral, handleOnBad }) => {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Please leave feedback</h1>
      <div className={css.buttonWrap}>
        <button type="button" onClick={handleOnGood}>
          Good
        </button>
        <button type="button" onClick={handleOnNeutral}>
          Neutral
        </button>
        <button type="button" onClick={handleOnBad}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
    </div>
  );
};
