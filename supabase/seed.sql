-- Dev seed data for NeuroClass
-- Test users
INSERT INTO auth.users (id, email, raw_user_meta_data) VALUES
  ('00000000-0000-0000-0000-000000000001', 'instructor@test.com', '{"full_name": "Dr. Smith"}'),
  ('00000000-0000-0000-0000-000000000002', 'student1@test.com', '{"full_name": "Alice Johnson"}'),
  ('00000000-0000-0000-0000-000000000003', 'student2@test.com', '{"full_name": "Bob Williams"}');

-- Profiles
INSERT INTO public.profiles (id, email, full_name, role) VALUES
  ('00000000-0000-0000-0000-000000000001', 'instructor@test.com', 'Dr. Smith', 'INSTRUCTOR'),
  ('00000000-0000-0000-0000-000000000002', 'student1@test.com', 'Alice Johnson', 'STUDENT'),
  ('00000000-0000-0000-0000-000000000003', 'student2@test.com', 'Bob Williams', 'STUDENT');

-- Sample course
INSERT INTO public.courses (id, title, description, instructor_id, join_code, pedagogy) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'CS 301 â€” Data Structures', 'Advanced data structures and algorithms', '00000000-0000-0000-0000-000000000001', 'DS301ABC', 'SOCRATIC');

-- Enrollments
INSERT INTO public.enrollments (user_id, course_id) VALUES
  ('00000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001'),
  ('00000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001');
