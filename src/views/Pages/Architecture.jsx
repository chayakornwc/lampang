import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadArchitecture} from '../../redux/actions/architecture';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography'
class Architecture extends React.Component {

    componentDidMount() {
       return this.props.dispatch(loadArchitecture());
    }

  render() {
    const {architectures}  = this.props
    console.log(architectures)
    return (
      <div>
        <SectionTypography data={architectures} />
        

      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        architectures: state.architectureReducers.architectures
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Architecture));