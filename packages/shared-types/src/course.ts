export type PedagogyStyle = "SOCRATIC" | "SCAFFOLDED" | "DIRECT" | "PROJECT_BASED";
export interface Course { id: string; title: string; description: string; instructor_id: string; join_code: string; pedagogy: PedagogyStyle; created_at: string; }
export interface Enrollment { id: string; user_id: string; course_id: string; enrolled_at: string; }
