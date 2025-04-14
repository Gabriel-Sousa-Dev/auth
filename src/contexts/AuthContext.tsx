"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Login } from "@/actions/user/Login";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<boolean>;
  signOut: () => void;
};

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: async () => false,
  signOut: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/");
      }
    };

    checkAuthentication();

    const handleStorageChange = () => {
      checkAuthentication();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router]);

  async function signIn({ email, password }: SignInData): Promise<boolean> {
    try {
      const token = await Login({ email, password });

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        return true;
      } else {
        console.log("Erro ao fazer login");
        return false;
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      return false;
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/");
  }

  const contextValue: AuthContextType = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);