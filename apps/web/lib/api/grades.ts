import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type GradeRow    = Database['public']['Tables']['grades']['Row'];
type GradeInsert = Database['public']['Tables']['grades']['Insert'];
type GradeUpdate = Database['public']['Tables']['grades']['Update'];

export const getGradesByProject = (projectId: string) =>
  createClient().from<'grades', GradeRow>('grades').select('*').eq('project_id', projectId);

export const getGradesByStudent = (studentId: string) =>
  createClient().from<'grades', GradeRow>('grades').select('*').eq('student_id', studentId);

export const getGradeById = (id: string) =>
  createClient().from<'grades', GradeRow>('grades').select('*').eq('id', id).single();

export const createGrade = (grade: GradeInsert) =>
  createClient().from<'grades', GradeRow>('grades').insert(grade).select().single();

export const updateGrade = (id: string, updates: GradeUpdate) =>
  createClient().from<'grades', GradeRow>('grades').update(updates).eq('id', id);
