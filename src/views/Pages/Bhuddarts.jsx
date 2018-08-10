import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadBguddarts} from '../../redux/actions/bhuddarts';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class Bhuddarts extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadBguddarts())
    }

  render() {
    const {bhuddarts}  = this.props

    return (
      <div>
        <SectionTypography data={bhuddarts} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        bhuddarts: state.bhuddartsReducers.bhuddarts
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Bhuddarts));