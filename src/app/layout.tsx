import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nation Events",
  description: "Find Nation events near you",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className="flex min-h-screen flex-col items-center">
          <Header />
          {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
