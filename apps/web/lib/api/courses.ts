import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type CourseRow    = Database['public']['Tables']['courses']['Row'];
type CourseInsert = Database['public']['Tables']['courses']['Insert'];
type CourseUpdate = Database['public']['Tables']['courses']['Update'];

// NOTE: Do NOT use .from<'table', RowType>() — that overload does not exist in
// supabase-js v2. The Database generic is already baked into the client via
// createClient<Database>(), so .from('courses') is fully typed automatically.

export const getCourses = () =>
  createClient().from('courses').select('*');

export const getCourseById = (id: string) =>
  createClient().from('courses').select('*').eq('id', id).single();

export const createCourse = (course: CourseInsert) =>
  createClient().from('courses').insert(course).select().single();

export const updateCourse = (id: string, updates: CourseUpdate) =>
  createClient().from('courses').update(updates).eq('id', id);

export const deleteCourse = (id: string) =>
  createClient().from('courses').delete().eq('id', id);

// Re-export row type for use in components
export type { CourseRow, CourseInsert, CourseUpdate };
