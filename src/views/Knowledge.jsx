import React, { Component } from 'react'
import {  Route, Switch } from "react-router";

import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import classNames from "classnames";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
  
import Parallax from "components/Parallax/Parallax.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Arichiecture from './Pages/Architecture';
 
import childRoutes from './childRoutes';

class Knowledge extends React.Component {

  render() {
    const { match,home,classes, ...rest } = this.props;
   
    return (
      <div>
       < Header
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
         
         <Switch>
           {childRoutes.map((prop, key)=>{
         return  <Route key={key} 
                    path={`${match.url}/${prop.path}`} 
                    component={prop.component}
                    />
           })}
          

         </Switch>
       
     
        </div>
        <Footer />
      </div>
    
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default withStyles(componentsStyle)(connect(mapStateToProps)(Knowledge));
