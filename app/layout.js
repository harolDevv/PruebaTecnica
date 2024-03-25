import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DummyDress",
  description: "Prueba tecnica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark">
          {children}
        </main>
      </body>
    </html>
  );
}
