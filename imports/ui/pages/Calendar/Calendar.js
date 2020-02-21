import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// import ApiCalendar from "react-google-calendar-api"; // cannot use OAuth or use API credentials without verification and having a production app in the Play Store
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

moment.locale("en-CA");
class GCalendar extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={e => ApiCalendar.handleAuthClick()}>sign-in</button> */}
        <Calendar
          events={[
            {
              id: 0,
              title: "RED Academy - Web/App Development Bootcamp",
              allDay: false,
              start: new Date(2020, 1, 19, 9, 0),
              end: new Date(2020, 1, 19, 17, 0)
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
export default GCalendar;
