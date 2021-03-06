import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import SectionBasics from "./Sections/SectionBasics";


import SectionTypography from "./Sections/SectionTypography";


import CircularProgress from '@material-ui/core/CircularProgress';
import SectionLogin from './Sections/SectionLogin';
import { connect } from 'react-redux';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import {loadKnowledge} from  "../../redux/actions/homepage";

class Components extends React.Component {
  constructor (props){
    super(props)
    this.handleTermSearch = this.handleTermSearch.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(loadKnowledge());
  }
  handleTermSearch(id, term=''){
    this.props.dispatch(loadKnowledge(id,term))
  }
  render() {
    const { home,classes, ...rest } = this.props;
  
    return (
      <div>
        <Header
          brand="The art @Lampangluang"
          rightLinks={<HeaderLinks category={require("assets/data/category.json")} />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/177288_406341352772138_811631963_o.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>{`ลำปางหลวง`}</h1>
                  <h3 className={classes.subtitle}>
                    Art - LampangLuang.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          {home.isLoading &&  <CircularProgress className={styles.progress} color="secondary" />}
          <SectionBasics handleTermSearch={this.handleTermSearch}  data={require('assets/data/category.json')} />
          <SectionTypography data={home} />
          <SectionLogin />
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    home: state.homeReducers.home
  }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Components));

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});