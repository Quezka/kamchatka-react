import React, { useEffect, useState } from "react";
import "./InputCalendar.scss";
import CalendarIcon from "../../assets/icons/calendar-2-input.svg?react";

import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { ru } from "react-day-picker/locale";

const InputCalendar: React.FC = () => {
	const [selected, setSelected] = useState<DateRange>();
	const [isHidden, setHidden] = useState(true);
	return (
		<>
			{isHidden == false && (
				<div
					className="calendar-fullscreen-div"
					onClick={() => {
						setHidden(!isHidden);
					}}
				></div>
			)}
			<div className="input-calendar-container">
				<span className="input-calendar-title">Даты тура</span>
				<input
					className="input-calendar"
					value={
						selected
							? `${selected["from"]?.toLocaleDateString().substring(0, 5)} - ${selected["to"]?.getFullYear() == selected["from"]?.getFullYear() ? selected["to"]?.toLocaleDateString().substring(0, 5) : selected["to"]?.toLocaleDateString()}`
							: ""
					}
				/>
				<button
					className="calendar-icon"
					onClick={() => {
						setHidden(!isHidden);
					}}
				>
					<CalendarIcon />
				</button>
				{isHidden == false && (
					<div className="calendar-div">
						<DayPicker animate mode="range" selected={selected} onSelect={setSelected} locale={ru} disabled={{ before: new Date() }} />
					</div>
				)}
			</div>
		</>
	);
};

export default InputCalendar;
