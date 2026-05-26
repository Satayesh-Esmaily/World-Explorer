import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MuiProvider from "@/components/MuiProvider";

export const metadata = {
  title: "World Explorer",
  description: "A Next.js country explorer project for Week 13 and Week 14",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ minHeight: "100vh" }}>
        <MuiProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </MuiProvider>
      </body>
    </html>
  );
}

