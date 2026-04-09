import bcrypt from "bcryptjs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const DEFAULT_ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "admin@example.com").toLowerCase();
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

async function ensureDefaultAdmin() {
  const existing = await prisma.user.findUnique({
    where: { email: DEFAULT_ADMIN_EMAIL },
  });

  if (!existing) {
    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 12);

    await prisma.user.create({
      data: {
        email: DEFAULT_ADMIN_EMAIL,
        passwordHash,
        role: "ADMIN",
      },
    });
  }
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await ensureDefaultAdmin();

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!user) {
          return null;
        }

        const valid = await bcrypt.compare(credentials.password, user.passwordHash);

        if (!valid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id ?? "");
        session.user.role = String(token.role ?? "ADMIN");
      }

      return session;
    },
  },
};
