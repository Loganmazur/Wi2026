import React from 'react';
import Breadcrumb from './Breadcrumb';
import PageTitle from './PageTitle';
import CommentForm from './CommentForm';

function FullWidth() {
  return (
    <div>
      {/* ===== PARENT PASSING PROPS TO CHILDREN ===== */}
      <PageTitle title="Viral | Pages | Full Width" />
      <Breadcrumb title="Full Width" />

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
            <p>You can use and modify the template for both personal and commercial use.</p>
            <p>Portortornec condimenterdum eget consectetuer condis consequam pretium pellus sed mauris enim.</p>

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
                    <p>This is an example of a comment made on a post.</p>
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
                    <p>This is an example of a comment made on a post.</p>
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
                    <p>This is an example of a comment made on a post.</p>
                  </div>
                </article>
              </li>
            </ul>

            {/* ===== COMMENT FORM - CHILD COMPONENT ===== */}
            <CommentForm heading="Write A Comment" />

          </div>
          <div className="clear"></div>
        </main>
      </div>
    </div>
  );
}

export default FullWidth;