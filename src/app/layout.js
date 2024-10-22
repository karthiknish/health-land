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
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10832930955"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10832930955');
            `,
          }}
        />
        <Script
          id="facebook-pixel"
          defer
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
             n.queue=[];t=b.createElement(e);t.async=!0;
             t.src=v;s=b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t,s)}(window, document,'script',
                                             'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '362063942726861');
            fbq('track', 'PageView');
          `,
          }}
        />
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
