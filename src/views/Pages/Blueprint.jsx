
import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadBlueprint} from '../../redux/actions/blueprint';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Blueprint extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadBlueprint())
    }

  render() {
    const {blueprint}  = this.props
   
    return (
      <div>
        <SectionTypography data={blueprint} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        blueprint: state.blueprintReducers.blueprint
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Blueprint));