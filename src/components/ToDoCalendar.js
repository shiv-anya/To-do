import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TodoCalendar = ({ todos }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Filter todos for the selected date
  const todosForSelectedDate = todos.filter(
    (todo) =>
      selectedDate &&
      new Date(todo.dueDate).toDateString() === selectedDate.toDateString()
  );

  // Click handler for selecting a date on the calendar
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex gap-5 h-full items-center max-md:flex-col max-md:items-start max-md:mt-10">
      <div>
        <Calendar
          onClickDay={handleDateClick}
          tileContent={({ date, view }) =>
            view === "month" &&
            todos.some(
              (todo) =>
                new Date(todo.dueDate).toDateString() === date.toDateString()
            ) ? (
              <span className="due-date-dot">●</span>
            ) : null
          }
        />
      </div>
      <div className="h-1/3">
        {selectedDate && (
          <div className="h-full">
            <h3>To-Dos for {selectedDate.toDateString()}</h3>
            {todosForSelectedDate.length > 0 ? (
              <ul className="h-full overflow-y-scroll">
                {todosForSelectedDate.map((todo) => (
                  <li key={todo.id}> {"-> " + todo.title}</li>
                ))}
              </ul>
            ) : (
              <p>No to-dos for this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCalendar;
