import { createClient as _createClient } from '@supabase/supabase-js';
import type { Database } from './types';

/**
 * Browser-safe Supabase client.
 * Uses @supabase/supabase-js directly so the Database generic
 * is always correctly inferred by TypeScript in all call sites.
 * Call this inside components/hooks/api functions — never at module level.
 */
export function createClient() {
  return _createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
