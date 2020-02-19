import React, { ReactNode, SyntheticEvent } from "react";
import BigCalendar from "react-big-calendar";
import { Calendar, momentLocalizer } from "react-big-calendar";
// import ApiCalendar from "react-google-calendar-api";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-CA");

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

let Basic = () => (
  <Calendar
    events={[
      {
        title: "My event",
        allDay: false,
        start: new Date(2020, 19, 2),
        end: new Date(2020, 20, 2)
      }
    ]} // change events to api calendar events
    // views={allViews}
    step={60}
    showMultiDayTimes
    max={new Date(2021, 0, 1, 17, 0)}
    defaultDate={new Date(2020, 19, 2)}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 800 }}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper
    }}
    localizer={momentLocalizer(moment)}
  />
);

export default Basic;
