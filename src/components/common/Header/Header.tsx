import { localStorageKey } from '../../../constants';
import { Alarm } from '../../Alarm/Alarm';
import { AlarmType } from '../../MainLayout/MainLayout';
import * as S from './Header.styles';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  alarmData: AlarmType[];
  setAlarmData: React.Dispatch<React.SetStateAction<AlarmType[]>>;
};

export function Header({ alarmData, setAlarmData }: HeaderProps) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(localStorageKey.accessToken);
    navigate('/');
  };
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.Logo
          onClick={() => {
            navigate('/main');
          }}
        >
          HeeJinBook
        </S.Logo>
        <S.GoToLibrary
          onClick={() => {
            navigate('myLibrary');
          }}
        >
          내서재
        </S.GoToLibrary>
      </S.Header>
      <S.BtnContainer>
        <Alarm alarmData={alarmData} setAlarmData={setAlarmData} />
        <button onClick={logout}>logout</button>
      </S.BtnContainer>
    </S.HeaderContainer>
  );
}
