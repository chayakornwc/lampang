import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import SectionCarousel from "../Sections/SectionCarousel.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import image from "assets/img/faces/avatar.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes, data } = this.props;
    console.log(data)
    return (
  
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.space50} />
              {data && data.data && data.data.map(function(e,i){
                    return (
                      <div key={e.detail} >
                        <div className={classes.typo}>
                          <h3>{e.detail}</h3>
                        </div>
                    
                    
                      <Muted>
                      <SectionCarousel data={e.images}/>
                      {ReactHtmlParser(e.detailT)}
                      </Muted>
                      <div className={classes.space50} />
                    </div>
                    )
                  })}
              </div>
            </div>
          </div>       
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
