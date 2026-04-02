// Stub types for Phase 0 — replace with:
// supabase gen types typescript --project-id <ref> > lib/supabase/types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url: string | null;
          role: 'INSTRUCTOR' | 'TEACHING_ASSISTANT' | 'STUDENT' | 'ADMIN';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string | null;
          role: 'INSTRUCTOR' | 'TEACHING_ASSISTANT' | 'STUDENT' | 'ADMIN';
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string | null;
          role?: 'INSTRUCTOR' | 'TEACHING_ASSISTANT' | 'STUDENT' | 'ADMIN';
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          instructor_id: string;
          pedagogy_style: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          instructor_id: string;
          pedagogy_style?: string;
          is_active?: boolean;
        };
        Update: {
          title?: string;
          description?: string | null;
          instructor_id?: string;
          pedagogy_style?: string;
          is_active?: boolean;
          updated_at?: string;
        };
      };
      lectures: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          content: string | null;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          content?: string | null;
          order_index?: number;
        };
        Update: {
          title?: string;
          content?: string | null;
          order_index?: number;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string | null;
          due_date: string | null;
          max_score: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          description?: string | null;
          due_date?: string | null;
          max_score?: number;
        };
        Update: {
          title?: string;
          description?: string | null;
          due_date?: string | null;
          max_score?: number;
          updated_at?: string;
        };
      };
      grades: {
        Row: {
          id: string;
          project_id: string;
          student_id: string;
          score: number | null;
          feedback: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          student_id: string;
          score?: number | null;
          feedback?: string | null;
          status?: string;
        };
        Update: {
          score?: number | null;
          feedback?: string | null;
          status?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
