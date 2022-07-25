import React from "react";
import { addStep, resetStep } from "../redux/steps/stepActions";
import { connect } from "react-redux";

const Steps = (props) => {
  return (
    <div>
      <h1>You've walked {props.steps} steps today!</h1>
      <div className='steps'>
        <button className='add' onClick={props.add}>Add a Step</button>
        <button className='reset' onClick={props.reset}>Reset Steps</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    steps: state.steps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addStep()),
    reset: () => dispatch(resetStep())
  };
};

const connectWrapper = connect(mapStateToProps, mapDispatchToProps);

export default connectWrapper(Steps);
