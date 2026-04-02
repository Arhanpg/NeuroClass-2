export const ROLES = {
  INSTRUCTOR: 'INSTRUCTOR',
  TEACHING_ASSISTANT: 'TEACHING_ASSISTANT',
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const PEDAGOGY_STYLES = {
  DIRECT_INSTRUCTION: 'Direct Instruction',
  SOCRATIC: 'Socratic',
  GUIDED_DISCOVERY: 'Guided Discovery',
  FLIPPED_CLASSROOM: 'Flipped Classroom',
  CUSTOM: 'Custom',
} as const;

export const EMBEDDING_STATUS = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  DONE: 'DONE',
  FAILED: 'FAILED',
} as const;

export const GRADING_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  RELEASED: 'RELEASED',
} as const;

export const SESSION_STATUS = {
  SCHEDULED: 'SCHEDULED',
  LIVE: 'LIVE',
  ENDED: 'ENDED',
  CANCELLED: 'CANCELLED',
} as const;

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://neuroclass.vercel.app';
export const CLOUD_RUN_URL = process.env.CLOUD_RUN_URL ?? '';
