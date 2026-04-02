export interface RubricCriterion { name: string; description: string; max_score: number; weight: number; }
export interface Rubric { id: string; course_id: string; project_id: string; criteria: RubricCriterion[]; created_at: string; }
export interface Grade { id: string; student_id: string; project_id: string; rubric_id: string; scores: Record<string, number>; total: number; status: "PENDING" | "APPROVED" | "REJECTED" | "OVERRIDDEN"; ai_justification: string; instructor_notes?: string; }
