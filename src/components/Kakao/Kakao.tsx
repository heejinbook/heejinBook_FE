import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../../apis/user';
import { localStorageKey } from '../../constants';
import { setItem } from '../../utils/localstorage';

export function Kakao() {
  const navigate = useNavigate();

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const code = params.get('code')?.toString();

  if (code) {
    kakaoLogin({ code })
      .then((result) => {
        if (result.status === 200) {
          const userId: number = result.data.data.userId;
          const token = result.data.data.accessToken;
          setItem(localStorageKey.accessToken, token);
          setItem(localStorageKey.userId, userId);
          navigate('/main');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return <></>;
}
