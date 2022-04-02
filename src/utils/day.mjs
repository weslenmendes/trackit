import "dayjs/locale/pt-br.js";
import dayjs from "dayjs";

const getToday = () => {
  dayjs.locale("pt-br");
  let day = dayjs().format("dddd, DD/MM").replace("-feira", "");

  return day[0].toUpperCase() + day.slice(1).toLowerCase();
};

export { getToday };
