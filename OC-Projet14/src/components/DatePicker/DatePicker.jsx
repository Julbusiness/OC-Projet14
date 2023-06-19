import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

function CustomDatePicker(props) {
	const [selectedDate, setSelectedDate] = useState(null);
	const placeholderText = props.placeholderText;

	return (
		<DatePicker
			selected={selectedDate}
			onChange={(date) => setSelectedDate(date)}
			fixedHeight
			placeholderText={placeholderText}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={100}
      scrollableYearDropdown
      className="date-picker"
		/>
	);
}

export default CustomDatePicker;

