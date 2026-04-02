import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(2000),
  pedagogy: z.enum(["SOCRATIC", "SCAFFOLDED", "DIRECT", "PROJECT_BASED"]),
});

export const projectSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10),
  due_date: z.string().datetime(),
});

export const rubricCriterionSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  max_score: z.number().positive(),
  weight: z.number().min(0).max(1),
});

export const rubricSchema = z.object({
  criteria: z.array(rubricCriterionSchema).refine((c) => Math.abs(c.reduce((sum, x) => sum + x.weight, 0) - 1) < 0.01, "Weights must sum to 1.0"),
});
