import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>PLAYER GOES HERE</h3>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStreams })(StreamShow);
