import bgImage from "./components/backgroundImage.js";
import clock from "./components/clock.js";
import setQuote from "./components/quotes.js";
import greeting from "./components/greeting.js";
import todo from "./components/todo.js";
import weather from "./components/weather.js";

document.body.appendChild(bgImage);

const clockContainer = document.querySelector("h2#clock");
clockContainer.appendChild(clock);

setQuote();

greeting();

todo();

weather();
