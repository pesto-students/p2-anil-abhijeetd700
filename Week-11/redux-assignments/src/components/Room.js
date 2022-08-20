import React from "react";
import { connect } from "react-redux";
import { onAction, offAction } from "../redux/lights/lightActions";

const Room = (props) => {
  const flipLight = () => {
    if (props.isLightOn) {
      props.off();
    } else {
      props.on();
    }
  };

  const lightedness = props.isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      <h1>The room is {lightedness}</h1>
      <br />
      <button onClick={flipLight} className='flip'>Flip</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLightOn: state.isLightOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    on: () => dispatch(onAction()),
    off: () => dispatch(offAction())
  };
};

const connectWrapper = connect(mapStateToProps, mapDispatchToProps);

export default connectWrapper(Room);
