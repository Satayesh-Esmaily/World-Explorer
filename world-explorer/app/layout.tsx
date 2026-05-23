import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MuiProvider from "@/components/MuiProvider";

export const metadata = {
  title: "World Explorer",
  description: "A Next.js country explorer project for Week 13 and Week 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
