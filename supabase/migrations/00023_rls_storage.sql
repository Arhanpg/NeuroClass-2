-- Storage bucket policies
-- Lecture files: instructors can upload, enrolled students can read
-- Submissions: students can upload to their own path, instructors can read

-- These policies are applied via Supabase Dashboard or supabase CLI
-- INSERT policy for lecture-files bucket: role = INSTRUCTOR
-- SELECT policy for lecture-files bucket: enrolled in course
-- INSERT policy for submissions bucket: authenticated users
-- SELECT policy for submissions bucket: own submissions OR instructor of course
