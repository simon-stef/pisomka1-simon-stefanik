// src/app/layout.tsx

import { Metadata } from "next";
import Menu from "@/components/Menu";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "KamNaKávu",
  description: "Webstránka na hodnotenie kaviární.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <Menu /> 
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}