const Header = () => {
    return (
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
          <nav className="menu">
            <ul>
                <li><a href="/solutions">Solutions</a></li>
                <li><a href="/industries">Industries</a></li>
                <li><a href="/company">Company</a></li>
                <li><a href="/insights">Insights</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
          </nav>
          <div className="contact-button">
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;