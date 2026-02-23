import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="wrapper row5">
        <footer id="footer" className="clear">
          <div className="one_quarter first">
            <h6 className="title">Viral</h6>
            <address className="btmspace-15">
              Company Name<br />
              Street Name &amp; Number<br />
              Town<br />
              Postcode/Zip
            </address>
            <ul className="nospace">
              <li className="btmspace-10"><span className="fa fa-phone"></span> +00 (123) 456 7890</li>
              <li><span className="fa fa-envelope-o"></span> info@domain.com</li>
            </ul>
          </div>
          <div className="one_quarter">
            <h6 className="title">Quick Links</h6>
            <ul className="nospace linklist">
              <li><Link to="/">Home Page</Link></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="one_quarter">
            <h6 className="title">From The Blog</h6>
            <article>
              <h2 className="nospace"><a href="#">Praesent Vestibulum</a></h2>
              <time className="smallfont" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
              <p>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed.</p>
            </article>
          </div>
          <div className="one_quarter">
            <h6 className="title">Grab Our Newsletter</h6>
            <form method="post" action="#">
              <fieldset>
                <legend>Newsletter:</legend>
                <input className="btmspace-15" type="text" defaultValue="" placeholder="Name" />
                <input className="btmspace-15" type="text" defaultValue="" placeholder="Email" />
                <button type="submit" value="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        </footer>
      </div>
      <div className="wrapper row6">
        <div id="copyright" className="clear">
          <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
          <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;