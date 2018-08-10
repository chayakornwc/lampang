import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadSilla} from '../../redux/actions/silla';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography'
class Architecture extends React.Component {

    componentDidMount() {
       return this.props.dispatch(loadSilla());
    }

  render() {
    const {silla}  = this.props
   
    return (
      <div>
        <SectionTypography data={silla} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        silla: state.sillaReducers.silla
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Architecture));