import "../style/global.scss";
import Header from "../global_components/Header";
import Footer from "../global_components/Footer";
import { PopupsProvider } from "@/contexts/PopupsContext";
import { CookiePopup } from "@/global_components/CookiePopup";

export const metadata = {
  title: "Business Assistance & Compliance Solutions | Aceptanta",
  description: "Get expert business support, compliance, and legal services, ensuring your global operations run smoothly and efficiently.",
  openGraph: {
    type: "website",
    title: "Business Assistance & Compliance Solutions | Aceptanta",
    description: "Get expert business support, compliance, and legal services, ensuring your global operations run smoothly and efficiently.",
    images: [
      {
        url: "/images/meta/1024.png",
        width: 1024,
        height: 512,
        alt: "Business Assistance & Compliance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Assistance & Compliance Solutions | Aceptanta",
    description: "Get expert business support, compliance, and legal services, ensuring your global operations run smoothly and efficiently.",
    images: ["/images/meta/1024.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PopupsProvider>
          <div className="white-block">
            <Header />
            <main>{children}</main>
          </div>
          <CookiePopup />
          <Footer />
        </PopupsProvider>
      </body>
    </html>
  );
}
