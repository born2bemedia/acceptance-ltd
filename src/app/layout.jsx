import '../style/global.scss';
import Header from '../global_components/Header';
import Footer from '../global_components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="white-block">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
