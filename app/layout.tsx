import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue-Tracker",
  description: "Issue Tracker nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme appearance="light" accentColor="violet">
              <NavBar />
              <Container>
                <main className="p-5">{children}</main>
              </Container>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
