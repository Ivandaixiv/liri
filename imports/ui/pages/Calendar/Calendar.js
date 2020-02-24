import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Tasks } from "../../../api/tasks";
const localizer = momentLocalizer(moment);
import { withTracker } from "meteor/react-meteor-data";

moment.locale("en-CA");

class BigCalendar extends Component {
  formatDates = () => {
    const dates = this.props.tasks.map(task => {
      if (task.startDate && task.endDate) {
        task.fullday = true;
        return {
          title: task.task,
          allDay: task.fullday,
          start: moment(task.startDate).format("YYYY-MM-DD"),
          end: moment(task.endDate).format("YYYY-MM-DD")
        };
      }
    });
    return dates;
  };

  render() {
    return (
      <div>
        <Calendar
          events={this.formatDates()}
          step={30}
          showMultiDayTimes
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
          localizer={localizer}
        />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("tasks");
  return {
    userId: Meteor.userId(),
    tasks: Tasks.find({}).fetch()
  };
})(BigCalendar);
