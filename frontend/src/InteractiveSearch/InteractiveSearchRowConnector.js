import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import InteractiveSearchRow from './InteractiveSearchRow';

function createMapStateToProps() {
  return createSelector(
    (state, { guid }) => guid,
    (state) => state.movieHistory,
    (state) => state.blacklist,
    (releaseGuid, movieHistory, blacklist) => {
      return {
        releaseGuid,
        movieHistory: movieHistory.items,
        blacklist: blacklist.items
      };
    }
  );
}

class InteractiveSearchRowConnector extends Component {

  //
  // Render

  render() {
    const {
      releaseGuid,
      movieHistory,
      blacklist,
      ...otherProps
    } = this.props;
    return (
      <InteractiveSearchRow
        releaseGuid={releaseGuid}
        movieHistory={movieHistory}
        blacklist={blacklist}
        {...otherProps}
      />
    );
  }

}

InteractiveSearchRowConnector.propTypes = {
  releaseGuid: PropTypes.string,
  movieHistory: PropTypes.array,
  blacklist: PropTypes.array
};

export default connect(createMapStateToProps)(InteractiveSearchRowConnector);
