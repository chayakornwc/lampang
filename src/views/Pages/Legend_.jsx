import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadLegend} from '../../redux/actions/legend';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Legend_ extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadLegend())    
    }

  render() {
    const {legend}  = this.props
   
    return (
      <div>
        <SectionTypography data={legend} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        legend:state.legendReducers.legend
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Legend_));