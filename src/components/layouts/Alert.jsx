import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../../redux/alerts/alertAction';
import { Alert } from '@material-ui/lab';

const Alerts = ({ alerts, removeAlert }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Fragment key={alert.id}>
        <Alert onClose={() => removeAlert(alert.id)} severity={alert.type}>
          <span>{alert.msg}</span>
        </Alert>
      </Fragment>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alerts);
