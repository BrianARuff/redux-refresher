import React from "react";
import { connect } from "react-redux";
import { getValue } from "../redux/actions";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // if dynamic state changing is needed based on props within this component or nearby relative children components...
  static getDerivedStateFromProps(props, state) {
    return { ...state, value: props.value };
  }

  render() {
    return (
      <div>
        <h4>
          Props Value From Redux{" "}
          <strong style={{ fontSize: "24px" }}>==> </strong>{" "}
          <span style={{ fontSize: "30px" }}>
            {JSON.stringify(this.props.value, null, 2)}
          </span>
        </h4>

        <h4>
          State Value From Redux + getDerivedStateFromProps{" "}
          <strong style={{ fontSize: "24px" }}>==> </strong>{" "}
          <span style={{ fontSize: "30px" }}>
            {JSON.stringify(this.state.value, null, 2)}
          </span>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.calculator.value,
  };
};

export default connect(mapStateToProps, { getValue })(Calculator);
