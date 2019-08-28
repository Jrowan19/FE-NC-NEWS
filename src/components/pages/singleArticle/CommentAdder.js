import React, { Component } from 'react';
import * as api from '../../api';

class CommentAdder extends Component {
  state = {
    body: ''
  };
  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mx-auto" style={{ width: '50rem' }}>
          <span className="badge badge-primary badge badge-lg">Comments</span>

          <textarea
            className="form-control"
            type="text"
            name="body"
            id="body"
            minLength="1"
            required
            value={body}
            onChange={event => this.handleChange(event.target.value, 'body')}
          />
          <button className="btn btn-success">Add Comment</button>
        </div>
      </form>
    );
  }

  handleChange = (text, value) => {
    this.setState({
      [value]: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    //const { username, article_id } = this.props;
    this.props.addComment(body);
  };
}

export default CommentAdder;
