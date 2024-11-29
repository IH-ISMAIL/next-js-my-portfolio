import { Rajdhani as RajdhaniFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransiton from "@/components/StairTransiton";


const rajdhani = RajdhaniFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Use lowercase "weight"
  variable: "--font-Rajdhani",
});

export const metadata = {
  title: "IH ISMAIL | Web Developer",
  description: "I am strategic and goal-oriented, and I always work with an end goal in mind. I like to take challenges in everything. I believe I am a good candidate for this position.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
        <Header />
        <StairTransiton/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
