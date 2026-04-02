// Auto-generated Supabase Database type definitions
// Run: npx supabase gen types typescript --local > lib/supabase/types.ts
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: { Row: { id: string; email: string; full_name: string; role: string; avatar_url: string | null; created_at: string }; Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at">; Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>; };
      courses: { Row: { id: string; title: string; description: string; instructor_id: string; join_code: string; pedagogy: string; created_at: string }; Insert: Omit<Database["public"]["Tables"]["courses"]["Row"], "id" | "created_at" | "join_code">; Update: Partial<Database["public"]["Tables"]["courses"]["Insert"]>; };
      enrollments: { Row: { id: string; user_id: string; course_id: string; enrolled_at: string }; Insert: Omit<Database["public"]["Tables"]["enrollments"]["Row"], "id" | "enrolled_at">; Update: Partial<Database["public"]["Tables"]["enrollments"]["Insert"]>; };
    };
    Functions: { match_lecture_chunks: { Args: { query_embedding: number[]; match_count: number; course_id: string }; Returns: { id: string; content: string; similarity: number }[] } };
  };
}
