import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  FormControlLabel
} from "@material-ui/core";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DateRangePicker } from "react-dates";
import "../../../api/tasks";
import "../../../api/users";

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  const { task, goal, startDate, endDate, fullday } = values;
  Meteor.call("task.addTask", task, goal, startDate._d, endDate._d, fullday);
};

const validate = values => {
  const errors = {};
  if (!values.task) {
    errors.task = "Required";
  }
  return errors;
};

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
    };
  }
  render() {
    return (
      <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h5" align="center" component="h2" gutterBottom>
          New Goals
        </Typography>
        <Typography paragraph align="center">
          Add additional tasks to your calendar.
        </Typography>
        <Form
          onSubmit={onSubmit}
          initialValues={{ fullday: false }}
          validate={validate}
          mutators={{
            setDates: ([{ startDate, endDate }], state, utils) => {
              utils.changeValue(state, "startDate", () => startDate);
              utils.changeValue(state, "endDate", () => endDate);
            }
          }}
          render={({
            form: { mutators },
            handleSubmit,
            reset,
            submitting,
            pristine,
            values
          }) => (
            <form
              onSubmit={event => {
                handleSubmit(event).then(reset);
              }}
              noValidate
            >
              <Paper style={{ padding: 16 }}>
                <Typography>Pick your dates: </Typography>
                <Grid item xs={12}>
                  <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={values.startDate}
                    endDate={values.endDate}
                    onDatesChange={mutators.setDates}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => {
                      this.setState({ focusedInput });
                    }}
                  />
                  <Field
                    name="startDate"
                    type="hidden"
                    render={({ input }) => {
                      return (
                        <input
                          {...input}
                          type="hidden"
                          value={this.state.startDate}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="task"
                      fullWidth
                      required
                      multiline
                      component={TextField}
                      type="task"
                      label="New Task"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="goal"
                      component={Select}
                      label="What Is Your Goal?"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Fitness">Be More Fit</MenuItem>
                      <MenuItem value="Lifestyle">Make Better Choice</MenuItem>
                      <MenuItem value="Productivity">
                        Be More Productive
                      </MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      label="All Day"
                      control={
                        <Field
                          name="fullday"
                          component={Checkbox}
                          type="checkbox"
                        />
                      }
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    );
  }
}

export default AddTask;
