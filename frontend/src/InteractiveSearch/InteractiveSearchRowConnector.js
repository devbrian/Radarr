import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import InteractiveSearchRow from './InteractiveSearchRow';

function createMapStateToProps() {
  return createSelector(
    (state, { guid }) => guid,
    (state) => state.movieHistory,
    (releaseId, history) => {
      const grabItem = history.items.find((c) => c.data.guid === releaseId);

      return {
        previouslyGrabbed: !!grabItem
      };
    }
  );
}

class InteractiveSearchRowConnector extends Component {

  //
  // Render

  render() {
    const {
      previouslyGrabbed,
      ...otherProps
    } = this.props;

    return (
      <InteractiveSearchRow
        previouslyGrabbed={previouslyGrabbed}
        {...otherProps}
      />
    );
  }

}

InteractiveSearchRowConnector.propTypes = {
  previouslyGrabbed: PropTypes.bool.isRequired
};

export default connect(createMapStateToProps)(InteractiveSearchRowConnector);
