import { supabase } from "@/utils/supabase";
import type { AuthError, Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  session: Session | null;
  loading: boolean;
  signout: () => Promise<{ error: AuthError | null }>
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() =>{ 
    // get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    // listen for auth state changes (only future changes)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe(); // clean up subscription on unmount

  }, [])

  const signout = async (): Promise<{ error: AuthError | null }> => {
    return supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, loading, signout }}>{ children }</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used withing an auth provider")
  }
  return context;
}