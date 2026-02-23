import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <div className="wrapper row0">
        <div id="topbar" className="clear">
          <div className="fl_left">
            <ul className="nospace inline">
              <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
              <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
            </ul>
          </div>
          <div className="fl_right">
            <ul className="faico clear">
              <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="faicon-pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
              <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a className="faicon-rss" href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper row1">
        <header id="header" className="clear">
          <div id="logo" className="fl_left">
            <h1><Link to="/">Viral</Link></h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <a className="drop" href="#">Pages</a>
                <ul>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/full-width">Full Width</Link></li>
                    <li><Link to="/sidebar-left">Sidebar Left</Link></li>
                    <li><Link to="/sidebar-right">Sidebar Right</Link></li>
                    <li><Link to="/basic-grid">Basic Grid</Link></li>
                </ul>
              </li>
              <li><a className="drop" href="#">Dropdown</a>
                <ul>
                  <li><a href="#">Level 2</a></li>
                  <li><a className="drop" href="#">Level 2 + Drop</a>
                    <ul>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Link Text</a></li>
              <li><a href="#">Link Text</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;