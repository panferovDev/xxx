import type { GroupType } from '@xxx/types/studentsGroup';
import { apiService } from './apiService';

export const createGroupService = (group: string): Promise<GroupType> => apiService
  .post<GroupType>('/group', { group })
  .then(({ data }) => data)
  .catch((error) => Promise.reject(error));

export const deleteGroupService = (id: number): Promise<number> => apiService
  .delete<string>(`/group/${id}`)
  .then(() => id)
  .catch((error) => Promise.reject(error));
