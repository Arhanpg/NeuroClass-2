import { createClient as _createClient } from '@supabase/supabase-js';
import type { Database } from './types';

/**
 * Server-side Supabase client (Server Components, Route Handlers, Server Actions).
 * Uses service role key for privileged operations.
 * Only import this in server-only files (app/ directory, route handlers).
 */
export async function createServerClient() {
  return _createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Service-role client — bypasses Row Level Security.
 * Use ONLY in trusted server-side code (webhooks, admin routes).
 */
export async function createServiceClient() {
  return _createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
