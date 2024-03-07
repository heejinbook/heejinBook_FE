import * as S from './Alarm.styles';
import IconBell from '../../assets/svg/bell.svg';
import { AlarmType } from '../MainLayout/MainLayout';
import { useState } from 'react';
import { ReviewModal } from '../ReviewModal/ReviewModal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { time } from './ElapsedTime';

type AlarmProps = {
  alarmData: AlarmType[];
  setAlarmData: React.Dispatch<React.SetStateAction<AlarmType[]>>;
};

export function Alarm({ alarmData, setAlarmData }: AlarmProps) {
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const { ref, visible, setVisible } = useOutsideClick(false);

  const allAlarmDeleteHandler = () => {
    setAlarmData([]);
  };

  return (
    <div ref={ref}>
      <ReviewModal
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        selectedReviewId={selectedReviewId}
      />
      <S.Alarm>
        <S.Bell
          src={IconBell}
          onClick={() => {
            setVisible(!visible);
          }}
        />
        {alarmData.length > 0 && (
          <S.YesAlarm
            onClick={() => {
              setVisible(!visible);
            }}
          />
        )}
        {visible && (
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
                    님이 회원님의 리뷰를 좋아합니다.
                    <br />
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
    </div>
  );
}
