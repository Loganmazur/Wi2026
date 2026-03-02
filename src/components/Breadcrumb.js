import React from 'react';

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="wrapper row2 bgded" style={{ backgroundImage: "url('/layout/images/demo/backgrounds/01.png')" }}>
        <div className="overlay">
          <div id="breadcrumb" className="clear">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Ipsum</a></li>
              <li><a href="#">{this.props.title}</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;