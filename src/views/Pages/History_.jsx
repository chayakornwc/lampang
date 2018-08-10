import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import {loadHistory} from '../../redux/actions/history';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import SectionTypography from '../../components/Sections/SectionTypography';

class History_ extends React.Component {

    componentDidMount() {
     this.props.dispatch(loadHistory())
    }

  render() {
    const {history}  = this.props
   
    return (
      <div>
        <SectionTypography data={history} />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        history: state.historyReducers.history
    }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(History_));