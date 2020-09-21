import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, { useState } from "react";

const EmpDetails = ({ employee, open, handleClickOpen, updateData }) => {
  const [message, setMessage] = useState(employee.message);

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = () => {
    updateData({ message: message, id: employee.id });
    setMessage("");
    handleClickOpen();
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClickOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
          className="emp-details-dialog-container"
        >
          <h3 className="header-data">Employee Details</h3>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p className="emp-details-container">
                <div className="field">
                  <div className="name">Name</div>
                  <div className="value">{employee && employee.name}</div>
                </div>
                <div className="field">
                  <div className="name">Skill</div>
                  <div className="value">
                    {employee && employee.skills.join(", ")}
                  </div>
                </div>
                <div className="field">
                  <div className="name">Open to relocate</div>
                  <div className="value">
                    {employee && employee.isOpenForRelocation ? "Yes" : "No"}
                  </div>
                </div>
              </p>
              <p className="emp-details-container">
                <div className="field">
                  <div className="name">Designation</div>
                  <div className="value">
                    {employee && employee.designation}
                  </div>
                </div>
                <div className="field">
                  <div className="name">Avaibility</div>
                  <div className="value">{employee && employee.avaibility}</div>
                </div>
              </p>
              <p className="emp-details-container">
                <div className="field">
                  <div className="name">Techologies</div>
                  <div className="value">
                    {employee && employee.technologies.join(", ")}
                  </div>
                </div>
                <div className="field">
                  <div className="name">Base Location</div>
                  <div className="value">
                    {employee && employee.location.join(", ")}
                  </div>
                </div>
              </p>
              <p className="emp-details-container">
                <div className="field text-area-filed">
                  <div className="name">Message</div>
                  <textarea
                    onChange={messageHandler}
                    value={message || employee.message}
                  ></textarea>
                </div>
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClickOpen}
              color="primary"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              Cancel
            </Button>
            <Button
              className="submit-button"
              onClick={submitHandler}
              color="primary"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
              autoFocus
              variant="contained"
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EmpDetails;
