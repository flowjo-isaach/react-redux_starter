Containers provide all the data and callbacks to a component. This is
accomplished using the connect method from react-redux.

example:

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../modules/visibilityFilter';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
