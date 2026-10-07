import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "NextBites — a recipe explorer",
  description: "Browse, search, and open recipes. Built with Next.js + TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="foot">
          Built with Next.js + TypeScript · NextBites
        </footer>
      </body>
    </html>
  );
}
