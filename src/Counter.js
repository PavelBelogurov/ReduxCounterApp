import React from "react";
import { connect } from "react-redux";
import "./Counter.css";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter: {counter}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
