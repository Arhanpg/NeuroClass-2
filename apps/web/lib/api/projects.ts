import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/supabase/types';

type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
type ProjectUpdate = Database['public']['Tables']['projects']['Update'];

export const getProjectsByCourse = (courseId: string) =>
  createClient().from('projects').select('*').eq('course_id', courseId);

export const getProjectById = (id: string) =>
  createClient().from('projects').select('*').eq('id', id).single();

export const createProject = (project: ProjectInsert) =>
  createClient().from('projects').insert(project).select().single();

export const updateProject = (id: string, updates: ProjectUpdate) =>
  createClient().from('projects').update(updates).eq('id', id);

export const deleteProject = (id: string) =>
  createClient().from('projects').delete().eq('id', id);
