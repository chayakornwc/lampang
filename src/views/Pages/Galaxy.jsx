import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadGalaxy} from '../../redux/actions/galaxy';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Galaxy extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadGalaxy())
    }

  render() {
    const {galaxy}  = this.props
   
    return (
      <div>
        <SectionTypography data={galaxy} />
      </div>
    
    )
  }
  
}

 const mapStateToProps = (state, ownProps) => {
    return {
        galaxy: state.galaxyReducers.galaxy
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Galaxy));