import Head from "next/head";
import { Poppins } from "next/font/google";
import { Footer, Nav, TopBtn } from "../../components/ui";
import "../../styles/css/root.css";
import { webData } from "../../utils/utils";
import { WebVitals } from "./web-vitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: webData.title,
  description: webData.desc,
  openGraph: {
    title: webData.title,
    description: webData.desc,
    url: webData.url,
    siteName: webData.siteName,
    images: {
      url: webData.img.url,
      alt: webData.img.alt,
      width: webData.img.width,
      height: webData.img.height,
    },

    locale: "en_UK",
    type: "website",
  },
  robots: webData.robots,
  twitter: {
    card: "summary_large_image",
    title: webData.title,
    description: webData.desc,
    creator: webData.creator,
    images: webData.img, // Must be an absolute URL
  },
  keywords: webData.keywords,
};

export const viewport = {
  themeColor: "#409fff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <WebVitals />
        <Head>
          <link rel="canonical" href={webData.url} key="canonical" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Nav />
        {children}
        <Footer />
        <TopBtn />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
      </body>
    </html>
  );
}
