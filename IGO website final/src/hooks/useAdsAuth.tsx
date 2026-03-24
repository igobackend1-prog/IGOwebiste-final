import { useState } from "react";
import { ADS_USERS, type AdsRole, type AdsUser } from "@/data/adsCredentials";

// ── Session storage keys ─────────────────────────────────────
const SESSION_KEY   = "igo_ads_session";
const SESSION_TOKEN = "ads_auth_2026";
const ROLE_KEY      = "igo_ads_role";
const NAME_KEY      = "igo_ads_name";

// ── Helpers ──────────────────────────────────────────────────
export const checkAdsSession = (): boolean =>
  sessionStorage.getItem(SESSION_KEY) === SESSION_TOKEN;

const getStoredRole = (): AdsRole | null =>
  (sessionStorage.getItem(ROLE_KEY) as AdsRole) || null;

const getStoredName = (): string =>
  sessionStorage.getItem(NAME_KEY) || "";

// ── Hook ─────────────────────────────────────────────────────
export const useAdsAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkAdsSession);
  const [role,       setRole]       = useState<AdsRole | null>(getStoredRole);
  const [userName,   setUserName]   = useState<string>(getStoredName);

  /**
   * Returns true on success.
   * TODO (Supabase migration): replace ADS_USERS lookup with
   *   `supabase.auth.signInWithPassword({ email, password })`
   *   and read role from `user.app_metadata.role`.
   */
  const login = (username: string, password: string): boolean => {
    const match: AdsUser | undefined = ADS_USERS.find(
      u =>
        u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
        u.password.trim() === password.trim()
    );

    if (match) {
      sessionStorage.setItem(SESSION_KEY, SESSION_TOKEN);
      sessionStorage.setItem(ROLE_KEY,    match.role);
      sessionStorage.setItem(NAME_KEY,    match.name);
      setIsLoggedIn(true);
      setRole(match.role);
      setUserName(match.name);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(ROLE_KEY);
    sessionStorage.removeItem(NAME_KEY);
    setIsLoggedIn(false);
    setRole(null);
    setUserName("");
  };

  /** Convenience: true only for superadmin */
  const isSuperAdmin = role === "superadmin";

  return { isLoggedIn, role, userName, isSuperAdmin, login, logout };
};
