import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class ListComponent extends Component {
  render() {
    return (
      <div>
        <p style={{ color: 'red' }}>{this.props.mobile}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { mobile: state.mobile };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);