import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type CourseRow    = Database['public']['Tables']['courses']['Row'];
type CourseInsert = Database['public']['Tables']['courses']['Insert'];
type CourseUpdate = Database['public']['Tables']['courses']['Update'];

export const getCourses = () =>
  createClient().from<'courses', CourseRow>('courses').select('*');

export const getCourseById = (id: string) =>
  createClient().from<'courses', CourseRow>('courses').select('*').eq('id', id).single();

export const createCourse = (course: CourseInsert) =>
  createClient().from<'courses', CourseRow>('courses').insert(course).select().single();

export const updateCourse = (id: string, updates: CourseUpdate) =>
  createClient().from<'courses', CourseRow>('courses').update(updates).eq('id', id);

export const deleteCourse = (id: string) =>
  createClient().from<'courses', CourseRow>('courses').delete().eq('id', id);
