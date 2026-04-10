import React, { useState } from "react";
import "./InputCalendar.scss";
import CalendarIcon from "../../assets/icons/calendar-2-input.svg?react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const InputCalendar: React.FC = () => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="input-calendar-container">
			<span className="input-calendar-title">Даты тура</span>
			<span className="input-calendar">23.06 - 04.07</span>
			<button className="calendar-icon">
				<CalendarIcon />
			</button>
			<div>
				<Calendar onChange={onChange} value={value} />
			</div>
		</div>
	);
};

export default InputCalendar;
