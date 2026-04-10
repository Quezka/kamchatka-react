import "./App.css";
import Button from "./components/Button/Button";
import NavButton from "./components/NavButton/NavButton";
import NavLink from "./components/NavLink/NavLink";
import H2 from "./components/H2/H2";
import Paragraph from "./components/Paragraph/Paragraph";
import ParagraphKeypoint from "./components/ParagraphKeypoint/ParagraphKeypoint";
import DifficultyIcon from "./assets/icons/levels.svg?react";
import FooterLink from "./components/FooterLink/FooterLink";
import MailIcon from "./assets/icons/email.svg?react";
import Card from "./components/Card/Card";
import WhiteCard from "./components/WhiteCard/WhiteCard";
import InputText from "./components/InputText/InputText";
import InputPeopleQty from "./components/InputPeopleQty/InputPeopleQty";
import InputCalendar from "./components/InputCalendar/InputCalendar";

import BearCardImg from "./assets/images/card-monument-start-of-russia.jpg";
import MountCardImg from "./assets/images/card-mountain.jpg";
import WhiteCardAudio from "./assets/images/whitecard-audio.jpg";
import WhiteCardTourists from "./assets/images/whitecard-tourists.jpg";

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
			<ParagraphKeypoint title="Сложность" desc="Для семейного отдыха">
				<DifficultyIcon />
			</ParagraphKeypoint>

			<FooterLink text="info@dreamkamtour.ru" link="mailto:info@dreamkamtour.ru">
				<MailIcon />
			</FooterLink>
			<Card
				title="Памятник “Здесь начинается Россия”"
				desc="Гости Камчатки по традиции делают фото в начале и в конце путешествий."
				imgSrc={BearCardImg}
				imgPosX={-143}
				imgPosY={-65}
			></Card>
			<WhiteCard
				imgSrc={WhiteCardTourists}
				title="Безопасность на маршруте"
				desc="Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций."
			></WhiteCard>
			<InputText placeholder="Имя" title="Имя участника"></InputText>
			<InputText placeholder="Напишите ваш комментарий здесь" title="Комментарий"></InputText>
			<InputText placeholder="Ваш e-mail"></InputText>
			<InputPeopleQty></InputPeopleQty>
			<div style={{ width: "300px" }}>
				<InputCalendar></InputCalendar>
			</div>
		</>
	);
}

export default App;
