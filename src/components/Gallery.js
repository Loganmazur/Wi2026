import { useEffect } from 'react';

function Gallery() {
  useEffect(() => {
    document.title = 'Viral | Pages | Gallery';
  }, []);
  return (
    <div>
      {/* ===== BREADCRUMB BANNER ===== */}
      <div className="wrapper row2 bgded" style={{ backgroundImage: "url('/layout/images/demo/backgrounds/01.png')" }}>
        <div className="overlay">
          <div id="breadcrumb" className="clear">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Ipsum</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="wrapper row3">
        <main className="container clear">
          <div className="content">

            {/* ===== GALLERY ===== */}
            <div id="gallery">
              <figure>
                <header className="heading">Gallery Title Goes Here</header>
                <ul className="nospace clear">
                  <li className="one_quarter first"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter first"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter first"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                  <li className="one_quarter"><a href="#"><img src="/layout/images/demo/gallery/01.png" alt="" /></a></li>
                </ul>
                <figcaption>Gallery Description Goes Here</figcaption>
              </figure>
            </div>

            {/* ===== PAGINATION ===== */}
            <nav className="pagination">
              <ul>
                <li><a href="#">&laquo; Previous</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><strong>&hellip;</strong></li>
                <li><a href="#">6</a></li>
                <li className="current"><strong>7</strong></li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li><strong>&hellip;</strong></li>
                <li><a href="#">14</a></li>
                <li><a href="#">15</a></li>
                <li><a href="#">Next &raquo;</a></li>
              </ul>
            </nav>

          </div>
          <div className="clear"></div>
        </main>
      </div>
    </div>
  );
}

export default Gallery;