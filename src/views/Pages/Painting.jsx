import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadPainting} from '../../redux/actions/painting';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography'
class Architecture extends React.Component {

    componentDidMount() {
       return this.props.dispatch(loadPainting());
    }

  render() {
    const {painting}  = this.props
   
    return (
      <div>
        <SectionTypography data={painting} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
      painting: state.paintingReducers.painting
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Architecture));