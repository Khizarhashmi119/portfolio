import React, { Fragment } from "react";
import { connect } from "react-redux";

const Alert = ({ alertsState }) => {
  return (
    <Fragment>
      {alertsState !== null &&
        alertsState.length > 0 &&
        alertsState.map((alert) => (
          <div key={alert.id} className="alert-box">
            {alert.msg}
          </div>
        ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { alertsState } = state;
  return {
    alertsState,
  };
};

export default connect(mapStateToProps)(Alert);
