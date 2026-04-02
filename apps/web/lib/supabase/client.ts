import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './types';

// Always call createClient() directly — do NOT cache as a module-level singleton.
// The singleton pattern causes TypeScript to infer ReturnType | null,
// which makes all .from() table generics collapse to `never`.
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
