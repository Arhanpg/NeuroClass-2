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
        Relationships: [];
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
        Relationships: [
          {
            foreignKeyName: 'courses_instructor_id_fkey';
            columns: ['instructor_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
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
        Relationships: [
          {
            foreignKeyName: 'lectures_course_id_fkey';
            columns: ['course_id'];
            isOneToOne: false;
            referencedRelation: 'courses';
            referencedColumns: ['id'];
          }
        ];
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
        Relationships: [
          {
            foreignKeyName: 'projects_course_id_fkey';
            columns: ['course_id'];
            isOneToOne: false;
            referencedRelation: 'courses';
            referencedColumns: ['id'];
          }
        ];
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
        Relationships: [
          {
            foreignKeyName: 'grades_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'grades_student_id_fkey';
            columns: ['student_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
