export const time = (time: string, lang = 'ko') => {
  //숫자타입이 아닌 것을 연산하려고 하다보니 에러 => 단항연산자 + 숫자타입으로 변환
  const checkTime = {
    isSecond: (time: number) => time < 60000,
    isMinute: (time: number) => 60000 <= time && time < 3600000,
    isHour: (time: number) => 3600000 <= time && time < 86400000,
    isDay: (time: number) => 86400000 <= time && time < 2592000000,
    isOverOneMonth: (time: number) => 2592000000 <= time,
  };

  const calcTime = {
    second: (time: number) => Math.floor(time / 1000),
    minute: (time: number) => Math.floor(time / 60000),
    hour: (time: number) => Math.floor(time / 3600000),
    day: (time: number) => Math.floor(time / 86400000),
  };

  const formatter = new Intl.RelativeTimeFormat(lang, {
    numeric: 'auto',
  });

  const passedTime = +new Date() - +new Date(time);

  if (checkTime.isSecond(passedTime)) {
    return formatter.format(-calcTime.second(passedTime), 'second');
  }
  if (checkTime.isMinute(passedTime)) {
    return formatter.format(-calcTime.minute(passedTime), 'minute');
  }
  if (checkTime.isHour(passedTime)) {
    return formatter.format(-calcTime.hour(passedTime), 'hour');
  }
  if (checkTime.isDay(passedTime)) {
    return formatter.format(-calcTime.day(passedTime), 'day');
  }
};