import { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import { StickyFooterBar } from "@/components/StickyFooterBar";
import { ClientProviders } from "@/components/ClientProviders";
import "@/index.css";

export const metadata: Metadata = {
  title: "Techmiya EdTech",
  description: "Premier IT Training Institute offering Generative AI, Machine Learning, Data Science, Python, AWS, DevOps courses in Jayanagar, Bangalore.",
  keywords: "IT training institutes in Jayanagar, IT training institute Jayanagar, best IT training Jayanagar, software training Jayanagar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="force-https" strategy="beforeInteractive">
          {`
            if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
              location.replace('https://' + location.hostname + location.pathname + location.search);
            }
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DXSCN0G1RZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DXSCN0G1RZ');
            gtag('config', 'AW-17825906545');
          `}
        </Script>

        {/* Facebook Pixel Placeholder */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `}
        </Script>

        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <SocialSidebar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <StickyFooterBar />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
