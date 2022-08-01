import { DateTime, Duration } from 'luxon'; // Работа со временем

export default function withFormatDate(WrappedComponent) {
  const func = function (props) {
    const { date } = props;
    const publicationDate = DateTime.fromSQL(date).setLocale('ru'); // Дата публикации
    const currentDate = DateTime.now().setLocale('ru'); // Текущее время

    // Разница по времени (годы, дни, месяцы, часы, минуты)
    const diff = currentDate
      .diff(publicationDate, ['years', 'months', 'days', 'hours', 'minutes'])
      .toObject();

    // Округляем данные времени до целого числа
    for (const key in diff) {
      diff[key] = Math.floor(diff[key]);
    }

    const { years, months, days, hours, minutes } = diff;

    /**
     * Создает подпись видео
     * @param {*} date - Объект содержащий один из ключей: years, months, days, hours, minutes
     * @returns - строка, прошедшее время со склонением
     */
    const getDateString = (diffDate) => {
      return `${Duration.fromObject(diffDate).toHuman()} назад`
    }

    let dateString = '';
    if (years > 0) {
      dateString = getDateString({years})
    } else if (months > 0) {
      dateString = getDateString({months})
    } else if (days >= 1) {
      dateString = getDateString({days})
    } else if (hours >= 1) {
      dateString = getDateString({hours})
    } else if (minutes !== 0) {
      dateString = getDateString({minutes})
    } else {
      dateString = 'Только что';
    }

    return <WrappedComponent {...props} date={dateString} />;
  };

  func.displayName = `withFormatDate`; // Имя компонента в devTools
  return func;
}
