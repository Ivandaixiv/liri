import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Tasks } from "../../../api/tasks";
const localizer = momentLocalizer(moment);
import { withTracker } from "meteor/react-meteor-data";

moment.locale("en-CA");

// let dates = task.map(task => {
//   if (task.startDate && task.endDate) {
//     var data = { startDate: task.startDate, endDate: task.endDate };
//     return data;
//   }
// });
class BigCalendar extends Component {
  render() {
    let { tasks } = this.props;
    console.log(tasks);
    return (
      <div>
        <Calendar
          events={[
            {
              id: 0,
              title: "RED Academy - Web/App Development Bootcamp",
              allDay: false,
              start: new Date(2020, 1, 21, 18, 15),
              end: new Date(2020, 1, 23, 19, 45)
            },
            {
              title: "Dinner Date",
              allDay: false,
              start: new Date(2020, 1, 19, 18, 15),
              end: new Date(2020, 1, 19, 19, 45)
            }
          ]}
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
