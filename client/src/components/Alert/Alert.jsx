import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./Alert.scss";

const Alert = () => {
  const alertsState = useSelector((state) => state.alertsState);

  return (
    <Fragment>
      {alertsState !== null &&
        alertsState.length > 0 &&
        alertsState.map((alert) => (
          <div key={alert.id} className={`alert-box ${alert.type}`}>
            {alert.msg}
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
