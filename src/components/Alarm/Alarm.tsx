import * as S from './Alarm.styles';
import IconBell from '../../assets/svg/bell.svg';
import { AlarmType } from '../MainLayout/MainLayout';
import { useState } from 'react';
import { ReviewModal } from '../ReviewModal/ReviewModal';

type AlarmProps = {
  alarmData: AlarmType[];
  setAlarmData: React.Dispatch<React.SetStateAction<AlarmType[]>>;
};

export function Alarm({ alarmData, setAlarmData }: AlarmProps) {
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const allAlarmDeleteHandler = () => {
    setAlarmData([]);
  };

  const time = (time: string, lang = 'ko') => {
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

  return (
    <>
      <ReviewModal
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        selectedReviewId={selectedReviewId}
      />
      <S.Alarm>
        <S.Bell
          src={IconBell}
          onClick={() => {
            setOpenAlarm(!openAlarm);
          }}
        />
        {alarmData.length > 0 && (
          <S.YesAlarm
            onClick={() => {
              setOpenAlarm(!openAlarm);
            }}
          />
        )}
        {openAlarm && (
          <S.AlarmList>
            {alarmData.length > 0 ? (
              <S.AllDelete onClick={allAlarmDeleteHandler}>알람 모두 삭제</S.AllDelete>
            ) : null}
            {alarmData.length > 0 ? (
              alarmData.map((alarm, idx) => (
                <S.List
                  key={idx}
                  onClick={() => {
                    setSelectedReviewId(alarm.reviewId);
                    setReviewModal(true);
                  }}
                >
                  <S.ListInfo>
                    {alarm.nickname}
                    님이 회원님의 리뷰를 좋아합니다.<span> </span>
                    <span className="time">{time(alarm.likedTime)}</span>
                  </S.ListInfo>
                  <img src={alarm.thumbnail} />
                </S.List>
              ))
            ) : (
              <S.NoAlarm className="noAlarm">알림이 없습니다</S.NoAlarm>
            )}
          </S.AlarmList>
        )}
      </S.Alarm>
    </>
  );
}
