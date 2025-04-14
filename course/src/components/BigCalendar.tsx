"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.MONTH);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "day"]}
      view={view}
      style={{ height: "80%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 5, 0, 0)}
      max={new Date(2025, 1, 0, 20, 0, 0)}
    />
  );
};

export default BigCalendar;
