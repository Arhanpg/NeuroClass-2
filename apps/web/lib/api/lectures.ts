import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type LectureRow    = Database['public']['Tables']['lectures']['Row'];
type LectureInsert = Database['public']['Tables']['lectures']['Insert'];
type LectureUpdate = Database['public']['Tables']['lectures']['Update'];

export const getLecturesByCourse = (courseId: string) =>
  createClient().from<'lectures', LectureRow>('lectures').select('*').eq('course_id', courseId).order('order_index');

export const getLectureById = (id: string) =>
  createClient().from<'lectures', LectureRow>('lectures').select('*').eq('id', id).single();

export const createLecture = (lecture: LectureInsert) =>
  createClient().from<'lectures', LectureRow>('lectures').insert(lecture).select().single();

export const updateLecture = (id: string, updates: LectureUpdate) =>
  createClient().from<'lectures', LectureRow>('lectures').update(updates).eq('id', id);

export const deleteLecture = (id: string) =>
  createClient().from<'lectures', LectureRow>('lectures').delete().eq('id', id);
