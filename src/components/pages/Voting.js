import React, { Component } from 'react';

class Voting extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <button onClick={() => this.updateVotes(1)} disabled={voteChange === 1}>
          Vote Up
        </button>
        <p>Votes: (votes + voteChange)</p>
        <button
          onClick={() => this.updateVotes(-1)}
          disabled={voteChange === -1}
        >
          Vote Down
        </button>
      </>
    );
  }
  updateVotes = voteDifference => {
    const { article_id, comment_id } = this.props;
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteDifference };
    });
  };
}

export default Voting;
