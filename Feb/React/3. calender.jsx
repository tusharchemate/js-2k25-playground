import React, { useState } from "react";
import "./styles.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

  const calendarDays = [];

  // Fill leading empty cells for days of the week
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  console.log(firstDayOfMonth);
  // Fill calendar with days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  console.log(daysInMonth);

  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, currentDate.getMonth() + offset, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&lt; Prev</button>
        <h2>{`${month} ${year}`}</h2>
        <button onClick={() => changeMonth(1)}>Next &gt;</button>
      </div>
      <div className="calendar-grid">
        {weekDays?.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div key={index} className={"day"}>
            {day ?? "-"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;



.calendar {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.calendar-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.calendar-header button {
  background: none;
  border: 1px solid #c61e1e;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.calendar-header button:hover {
  background-color: #0bdfbf;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.day-name {
  text-align: center;
  font-weight: bold;
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.day {
  text-align: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.day.empty {
  border: none;
  background-color: transparent;
  cursor: default;
}

.day.current-day {
  background-color: #ff6a00;
  color: white;
  font-weight: bold;
}

.day:hover:not(.empty) {
  background-color: #23d2d5;
}


