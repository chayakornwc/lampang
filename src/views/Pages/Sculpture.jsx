import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadSculpture} from '../../redux/actions/sculpture';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Sculpture extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadSculpture())
    }

  render() {
    const {scultures}  = this.props
   
    return (
      <div>
        <SectionTypography data={scultures} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        scultures: state.sculptureReducers.scultures
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Sculpture));