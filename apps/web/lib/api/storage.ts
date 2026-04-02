import { createClient } from '@/lib/supabase/client';

export const uploadFile = (bucket: string, path: string, file: File) =>
  createClient().storage.from(bucket).upload(path, file, { upsert: true });

export const getPublicUrl = (bucket: string, path: string) =>
  createClient().storage.from(bucket).getPublicUrl(path);

export const deleteFile = (bucket: string, path: string) =>
  createClient().storage.from(bucket).remove([path]);
