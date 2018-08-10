

import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadFestival} from '../../redux/actions/festival';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Festival extends React.Component {

    componentDidMount() {
      this.props.dispatch(loadFestival())
    }

  render() {
    const {festival}  = this.props
   
    return (
      <div>
        <SectionTypography data={festival} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
      festival: state.festivalReducers.festival
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Festival));