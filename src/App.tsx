import "./App.css";
import Button from "./components/Button/Button";
import NavButton from "./components/NavButton/NavButton";
import NavLink from "./components/NavLink/NavLink";

function App() {
	return (
		<>
			<Button buttonStyle="primary" text="Забронировать"></Button>
			<Button buttonStyle="primary" colourPrimary="white" text="Подписаться"></Button>
			<Button buttonStyle="secondary" text="Отправить заявку"></Button>
			<Button buttonStyle="secondary" isDisabled text="Получить"></Button>
			<NavButton></NavButton>
			<NavLink text="Расписание тура" colourScheme="black" href="https://google.com/"></NavLink>
		</>
	);
}

export default App;
