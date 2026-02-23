import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'Viral';
  }, []);
  return (
    <div>
{/* ===== HERO SECTION ===== */}
<div className="wrapper row2 bgded" style={{ backgroundImage: "url('/layout/images/demo/backgrounds/01.png')" }}>
  <div className="overlay">
    <section id="pageintro" className="clear">
      <div className="center btmspace-80">
        <h2 className="heading xxl uppercase btmspace-30">Ultricies convallis</h2>
        <p className="xl nospace capitalise">Aenean et cursus adipiscing</p>
      </div>
      <ul className="nospace group services">
        <li className="one_third first">
          <article className="overlay"><a href="#"><i className="fa fa-legal"></i></a>
            <h6 className="heading">Dui leo egestas augue</h6>
            <p>Maecenas libero nunc, volutpat eu erat sed, blandit elementum mi etiam scelerisque&hellip;</p>
            <footer><a href="#">Read More &raquo;</a></footer>
          </article>
        </li>
        <li className="one_third">
          <article className="overlay"><a href="#"><i className="fa fa-line-chart"></i></a>
            <h6 className="heading">Eget molestie augue diam</h6>
            {/* THIS LINE WAS SHORTER - now matches original */}
            <p>Donec facilisis volutpat ligula nec egestas aliquam malesuada, lectus sed sollicitudin&hellip;</p>
            <footer><a href="#">Read More &raquo;</a></footer>
          </article>
        </li>
        <li className="one_third">
          <article className="overlay"><a href="#"><i className="fa fa-archive"></i></a>
            <h6 className="heading">Fusce quis feugiat urna</h6>
            {/* THIS LINE WAS SHORTER - now matches original */}
            <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet&hellip;</p>
            <footer><a href="#">Read More &raquo;</a></footer>
          </article>
        </li>
      </ul>
    </section>
  </div>
</div>

{/* ===== MAIN CONTENT SECTION ===== */}
      <div className="wrapper row3">
        <main className="container clear">
          <div className="group">
            <div className="one_third first">
              <img src="/layout/images/demo/460x700.png" alt="" />
            </div>
            <div className="two_third">
              <h2 className="heading">Etiam finibus tempus felis eget ullamcorper</h2>
              {/* FULL PARAGRAPH TEXT - was shortened before */}
              <p>Cras pellentesque neque, consectetur adipiscing elit. Fusce venenatis elit ac ligula euismod varius. Maecenas feugiat purus quam, vel aliquet tellus sodales eu. Integer vitae vestibulum turpis, in sollicitudin quam. Aliquam vulputate non felis non luctus. Vestibulum eget augue nulla. Aliquam dignissim nibh mi, ut bibendum quam dapibus eget. Nam nec nisi vel sapien pulvinar ultrices. Curabitur rutrum nisl sagittis, pretium velit eget, convallis lacus. Nulla fermentum nulla ut lacus maximus, ut porttitor neque varius. Nullam sed vulputate sem. Sed bibendum porttitor metus.</p>
              <p className="btmspace-80">Donec lacinia lacus eros, nec luctus odio bibendum dictum. Vivamus nec egestas libero, non faucibus mauris. In in efficitur felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc porttitor turpis in ex porttitor, nec sagittis diam ultrices.</p>
              <ul className="nospace group">
                <li className="one_third first">
                  <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-location-arrow"></i> Praesent neque</a></h6>
                  <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                </li>
                <li className="one_third">
                  <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-lock"></i> Integer tinciduntt</a></h6>
                  <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                </li>
                <li className="one_third last">
                  <h6 className="nospace btmspace-10"><a href="#"><i className="fa fa-map-marker"></i> Aliquam mauris</a></h6>
                  <p className="nospace">Mauris consectetur vel tellus quis consectetur&hellip;</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </main>
      </div>

      {/* ===== INFO SECTION ===== */}
      <div className="wrapper row4">
        <section id="info" className="clear">
          <div className="center btmspace-80">
            <h2 className="heading uppercase btmspace-30">Curabitur eget elit sit amet purus congue</h2>
            {/* FULL PARAGRAPH TEXT - was shortened before */}
            <p className="lrspace">Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet pulvinar dapibus, dui leo egestas augue, eget molestie augue diam nec ante. Fusce quis feugiat urna. Curabitur a sapien tincidunt, ullamcorper mauris sit amet, ornare augue. Suspendisse potenti. Sed eget ultricies sem. Proin quis lacus egestas, adipiscing nunc ornare, gravida diam. Donec luctus convallis rhoncus.</p>
          </div>
          <div className="group">
            <div className="one_half first">
              <img src="/layout/images/demo/600x700.png" alt="" />
            </div>
            <div className="one_half">
              <ul className="nospace group services">
                <li>
                  <article><a href="#"><i className="fa fa-asterisk"></i></a>
                    <h6 className="heading">Ut pharetra nisi eu massa</h6>
                    <p>Nunc nec tincidunt turpis sed feugiat dui vestibulum euismod nunc sed vestibulum interdum&hellip;</p>
                    <footer><a href="#">Read More &raquo;</a></footer>
                  </article>
                </li>
                <li>
                  <article><a href="#"><i className="fa fa-bar-chart"></i></a>
                    <h6 className="heading">Pellentesque neque porttitor</h6>
                    <p>Maecenas luctus sed nulla ac faucibus cras pellent esque neque vitae tincidunt tempus&hellip;</p>
                    <footer><a href="#">Read More &raquo;</a></footer>
                  </article>
                </li>
                <li>
                  <article><a href="#"><i className="fa fa-paper-plane-o"></i></a>
                    <h6 className="heading">Nulla lobortis ultrices nibh</h6>
                    <p>Quisque sit amet tellus nunc praesent nunc augue, eleifend ac consequat sed egestas eu nunc&hellip;</p>
                    <footer><a href="#">Read More &raquo;</a></footer>
                  </article>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  );
}

export default Home;