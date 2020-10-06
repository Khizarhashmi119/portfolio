import React, { Fragment } from "react";

const Alert = ({ alerts }) => {
  return (
    <Fragment>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className="alert-box">
            {alert.msg}
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
