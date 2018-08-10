import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadDecorativepattern} from '../../redux/actions/decorativepattern';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Decorativepattern extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadDecorativepattern())
    }

  render() {
    const {decorativepattern}  = this.props
   
    return (
      <div>
        <SectionTypography data={decorativepattern} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        decorativepattern: state.decorativepatternReducers.decorativepattern
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Decorativepattern));