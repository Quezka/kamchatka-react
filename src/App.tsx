import "./App.css";
import Button from "./components/Button/Button";
import NavButton from "./components/NavButton/NavButton";
import NavLink from "./components/NavLink/NavLink";
import H2 from "./components/H2/H2";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
	return (
		<>
			<Button buttonStyle="primary" text="Забронировать"></Button>
			<Button buttonStyle="primary" colourPrimary="white" text="Подписаться"></Button>
			<Button buttonStyle="secondary" text="Отправить заявку"></Button>
			<Button buttonStyle="secondary" isDisabled text="Получить"></Button>
			<NavButton></NavButton>
			<NavLink text="Расписание тура" colourScheme="black" href="https://google.com/"></NavLink>
			<H2 day={1}>Прибытие. Встреча в аэропорту и размещение</H2>
			<H2 day={2} colour="black">
				Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники
			</H2>
			<Paragraph colour="grey">После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный поселок Паратунка.</Paragraph>
			<Paragraph colour="black">
				Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к водопаду Вилючинский. Термос с
				чаем, шоколад. Возвращение назад.
			</Paragraph>
			<Paragraph colour="white">
				Выезд на причал. Морская прогулка по Авачинской бухте. Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут
				пролегает мимо бухты Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность донной рыбалки на терпуга, ленка,
				камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.
			</Paragraph>
		</>
	);
}

export default App;
