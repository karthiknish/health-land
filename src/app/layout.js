import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Script from "next/script";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Business Health Check",
  description: "Health check for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></Script>
        <Script
          src="//profici.co.uk/wp-content/plugins/gravity-forms-iframe-master/assets/scripts/gfembed.min.js"
          type="text/javascript"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
