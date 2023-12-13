import styled from '@emotion/styled';

export const Alarm = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Bell = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const YesAlarm = styled.div`
  width: 10px;
  height: 10px;
  background-color: #edacac;
  border-radius: 100%;
  position: absolute;
  right: 10.7%;
  cursor: pointer;
`;

export const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 260px;
  max-height: 400px;
  list-style: none;
  background-color: #fffdf6;
  border: 1px solid #b9b19c9a;
  border-radius: 10px;
  z-index: 997;
  overflow-y: auto;
  position: absolute;
  top: 100%;
`;

export const AllDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 10px 0 0;
  color: #503f15;
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const ListInfo = styled.p`
  padding-right: 5px;
  font-size: 12px;
  .time {
    color: #bbb49e;
  }
`;

export const NoAlarm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
