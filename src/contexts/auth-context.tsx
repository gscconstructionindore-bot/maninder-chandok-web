"use client";

import { SessionProvider, useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";

interface AuthContextType {
    user: {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | null;
    isLoading: boolean;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProviderInner({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();

    const user = session?.user ? {
        id: (session.user as any).id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    } : null;

    const isLoading = status === "loading";

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            signIn: () => { }, // Handled by Modal mostly, or redirect
            signOut: nextAuthSignOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function AuthProvider({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <AuthProviderInner>{children}</AuthProviderInner>
        </SessionProvider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
