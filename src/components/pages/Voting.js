import React, { Component } from 'react';
import * as api from '../api';

class Voting extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes, username, author } = this.props;
    const { voteChange } = this.state;

    return (
      <>
        {username && username !== author && (
          <button
            className="btn btn-light btn-sm mx-auto"
            style={{ width: '10rem' }}
            onClick={() => this.updateVotes(1)}
            disabled={voteChange === 1}
          >
            <i className="fas fa-thumbs-up" />
          </button>
        )}

        <p className="text-white">VOTES: {votes + voteChange}</p>
        {username && username !== author && (
          <button
            className="btn btn-light btn-sm mx-auto"
            style={{ width: '10rem' }}
            onClick={() => this.updateVotes(-1)}
            disabled={voteChange === -1}
          >
            <i className="fas fa-thumbs-down" />
          </button>
        )}
      </>
    );
  }

  updateVotes = inc_votes => {
    console.log(inc_votes);
    const { article_id, comment_id } = this.props;
    console.log(this.props);
    api.updateVotes(article_id, comment_id, inc_votes).catch(error => {
      console.log(comment_id);
      this.setState(({ voteChange }) => {
        return { voteChange: voteChange - inc_votes };
      });
    });
    this.setState(({ voteChange }) => {
      return { voteChange: voteChange + inc_votes };
    });
  };
}

export default Voting;
