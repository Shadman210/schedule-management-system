import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { axiosInstance } from "../api";
import { ApiPath } from "../utils/constants";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const payload = {
                    email: credentials?.email,
                    password: credentials?.password,
                } as any;
                const { data } = await axiosInstance.post(
                    ApiPath.LOGIN,
                    payload
                );
                return { ...data };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session({ session, token }: any) {
            if (session) {
                session.user = token?.user;
            }
            return session;
        },
        async jwt({ token, user }) {
            try {
                if (user) {
                    token.user = user;
                }
                return token;
            } catch (e) {
                return token;
            }
        },
    },
};
