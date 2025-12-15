export interface ProjectSummary {
  id: number;
  title: string;
  status: string;
  responsible_user_id?: number | null;
}

export interface NewsSummary {
  id: number;
  title: string;
  created_at?: string | null; // ISO date string
  tags?: string[] | null;
}

export interface EventSummary {
  id: number;
  title: string;
  start: string; // ISO date string
  end: string; // ISO date string
  room_id: number;
}

export interface StatusSummary {
  projects: ProjectSummary[];
  upcoming_events: EventSummary[];
  recent_news: NewsSummary[];
}

export interface SystemStatusRead {
  id: number;
  service: string;
  status: string;
  message?: string | null;
  updated_at?: string | null;
}

export interface Token {
  access_token: string;
  token_type: string;
}

export interface User {
  email: string;
  // Add other user fields if we fetch them later
}
