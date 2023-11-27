import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from '../apis/user';

export function userQuery() {
  return useQuery({ queryKey: ['user'], queryFn: getMyInfo });
}
