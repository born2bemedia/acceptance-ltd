import "../style/global.scss";
import Header from "../global_components/Header";
import Footer from "../global_components/Footer";
import { PopupsProvider } from "@/contexts/PopupsContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PopupsProvider>
          <div className="white-block">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </PopupsProvider>
      </body>
    </html>
  );
}
