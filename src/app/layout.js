import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Hero",
  description: "Next Hero",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">NavBar</a>
        </nav>
        {children}
        <footer>
        <p>Footer</p>
        </footer>
        </body>
    </html>
  );
}

export default RootLayout;