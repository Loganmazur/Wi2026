import { useEffect } from 'react';

function FullWidth() {
  useEffect(() => {
    document.title = 'Full Width';
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
              <li><a href="#">Full Width</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="wrapper row3">
        <main className="container clear">
          <div className="content">
            <h1>&lt;h1&gt; to &lt;h6&gt; - Headline Colour and Size Are All The Same</h1>
            <img className="imgr borderedbox inspace-5" src="/layout/images/demo/imgr.gif" alt="" />
            <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
            <p>Dapiensociis <a href="#">temper donec auctortortis cumsan</a> et curabitur condis lorem loborttis leo. Ipsumcommodo libero nunc at in velis tincidunt pellentum tincidunt vel lorem.</p>
            <img className="imgl borderedbox inspace-5" src="/layout/images/demo/imgl.gif" alt="" />
            <p>This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>.</p>
            <p>You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files.</p>
            <p>Portortornec condimenterdum eget consectetuer condis consequam pretium pellus sed mauris enim. Puruselit mauris nulla hendimentesque elit semper nam a sapien urna sempus.</p>

            {/* ===== TABLE ===== */}
            <h1>Table(s)</h1>
            <div className="scrollable">
              <table>
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#">Value 1</a></td>
                    <td>Value 2</td>
                    <td>Value 3</td>
                    <td>Value 4</td>
                  </tr>
                  <tr>
                    <td>Value 5</td>
                    <td>Value 6</td>
                    <td>Value 7</td>
                    <td><a href="#">Value 8</a></td>
                  </tr>
                  <tr>
                    <td>Value 9</td>
                    <td>Value 10</td>
                    <td>Value 11</td>
                    <td>Value 12</td>
                  </tr>
                  <tr>
                    <td>Value 13</td>
                    <td><a href="#">Value 14</a></td>
                    <td>Value 15</td>
                    <td>Value 16</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ===== COMMENTS ===== */}
            <div id="comments">
              <h2>Comments</h2>
              <ul>
                <li>
                  <article>
                    <header>
                      <figure className="avatar"><img src="/layout/images/demo/avatar.png" alt="" /></figure>
                      <address>By <a href="#">A Name</a></address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
                <li>
                  <article>
                    <header>
                      <figure className="avatar"><img src="/layout/images/demo/avatar.png" alt="" /></figure>
                      <address>By <a href="#">A Name</a></address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
                <li>
                  <article>
                    <header>
                      <figure className="avatar"><img src="/layout/images/demo/avatar.png" alt="" /></figure>
                      <address>By <a href="#">A Name</a></address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
              </ul>

              {/* ===== WRITE A COMMENT FORM ===== */}
              <h2>Write A Comment</h2>
              <form action="#" method="post">
                <div className="one_third first">
                  <label htmlFor="name">Name <span>*</span></label>
                  <input type="text" name="name" id="name" defaultValue="" />
                </div>
                <div className="one_third">
                  <label htmlFor="email">Mail <span>*</span></label>
                  <input type="text" name="email" id="email" defaultValue="" />
                </div>
                <div className="one_third">
                  <label htmlFor="url">Website</label>
                  <input type="text" name="url" id="url" defaultValue="" />
                </div>
                <div className="block clear">
                  <label htmlFor="comment">Your Comment</label>
                  <textarea name="comment" id="comment" cols="25" rows="10"></textarea>
                </div>
                <div>
                  <input name="submit" type="submit" value="Submit Form" />
                  &nbsp;
                  <input name="reset" type="reset" value="Reset Form" />
                </div>
              </form>
            </div>
          </div>
          <div className="clear"></div>
        </main>
      </div>
    </div>
  );
}

export default FullWidth;