// ──────────────────────────────────────────────────────────────
//  Ads / Poster Portal — Local Credentials
//  TODO: Replace this file with Supabase auth when ready.
//        Each user row will become a record in a `ads_users` table.
// ──────────────────────────────────────────────────────────────

export type AdsRole = "superadmin" | "editor";

export interface AdsUser {
  username: string;   // case-insensitive match at login
  password: string;   // plain-text for now; hash in Supabase migration
  role: AdsRole;
  name: string;       // display name shown in the dashboard header
}

/**
 * Add more users here as needed.
 * Superadmin  → full access (upload, manage, delete, history)
 * Editor      → upload & manage only (no delete)
 */
export const ADS_USERS: AdsUser[] = [
  // ── Fixed admin credential ───────────────────────────────────
  //    Username : igoadmin
  //    Password : IGO@2026
  // ────────────────────────────────────────────────────────────
  {
    username: "igoadmin",
    password: "IGO@2026",
    role: "superadmin",
    name: "IGO Admin",
  },
];
