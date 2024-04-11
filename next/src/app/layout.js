import Head from "next/head";
import { Footer, Nav, TopBtn } from "../../components/ui";
import "../../styles/css/root.css";
import { webData } from "../../utils/utils";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
        </Head>
        <Nav />
        {children}
        <Footer />
        <TopBtn />
      </body>
    </html>
  );
}
