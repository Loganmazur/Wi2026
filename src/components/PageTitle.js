import React from 'react';

class PageTitle extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return null;
  }
}

export default PageTitle;