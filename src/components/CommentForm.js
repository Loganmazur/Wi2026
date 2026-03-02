import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
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
    );
  }
}

export default CommentForm;