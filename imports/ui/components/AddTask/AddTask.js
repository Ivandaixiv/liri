import React, { Component } from "react";
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
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "@material-ui/pickers";

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  );
}

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.task) {
    errors.task = "Required";
  }
  return errors;
};

class AddTask extends Component {
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
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="New Task"
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
                      name="Goal"
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                      <Field
                        name="date"
                        component={DatePickerWrapper}
                        fullWidth
                        margin="normal"
                        label="Date"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        name="time"
                        component={TimePickerWrapper}
                        fullWidth
                        margin="normal"
                        label="Time"
                      />
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
                  </MuiPickersUtilsProvider>
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
