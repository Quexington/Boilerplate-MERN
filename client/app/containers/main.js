import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Main from '../components/main';

import clickDispatch from '../actions/main';

const mapStateToProps = (state) => {
  return {
    clickDisplay: state.main.clickDisplay
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clickDispatch
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
