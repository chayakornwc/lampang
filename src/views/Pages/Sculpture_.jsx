import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadSculptrueSc} from '../../redux/actions/sculpture';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Sculpture_ extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadSculptrueSc())
    }

  render() {
    const {sculturesSC}  = this.props
   
    return (
      <div>
        <SectionTypography data={sculturesSC} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        sculturesSC: state.sculptureReducers.sculturesSC
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Sculpture_));