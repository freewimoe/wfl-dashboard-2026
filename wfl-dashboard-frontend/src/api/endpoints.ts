import client from './client';
import type { StatusSummary, SystemStatusRead } from './types';

export const fetchDashboardSummary = async (): Promise<StatusSummary> => {
  const response = await client.get<StatusSummary>('/status/summary');
  return response.data;
};

export const fetchSystemStatuses = async (): Promise<SystemStatusRead[]> => {
  const response = await client.get<SystemStatusRead[]>('/system/status');
  return response.data;
};
