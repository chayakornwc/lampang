import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadFestivaltemporary} from '../../redux/actions/festivaltemporary';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Festivaltemporary extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadFestivaltemporary())
    }

  render() {
    const {festivaltemp}  = this.props
   
    return (
      <div>
        <SectionTypography data={festivaltemp} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        festivaltemp: state.festivaltemporaryReducers.festivaltemp
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Festivaltemporary));