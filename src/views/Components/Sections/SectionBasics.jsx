import React from "react";
// react plugin that creates slider
import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words:'',
      category:''
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value
     })
     
  } 
  handleTermSearch = ()=>{
    const {words, category} = this.state
    if(words && category){
      this.props.handleTermSearch( category,words)
    }
    if(words){
      this.props.handleTermSearch('',words)
    }
    if(category){
      this.props.handleTermSearch(category,'')
    }
    if(!words && !category){
      alert(`กุรุณาเลือกคำค้นหรือ อย่างใดอย่างนึง`)
    }
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  
  render() {
    const {data, classes } = this.props;
   
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div id="inputs">
            <div className={classes.title}>
              <h3>ค้นหา</h3>
            </div>
            <GridContainer>
              <GridItem xs={12}  lg={12}>
                <CustomInput
                    labelText="คำค้นหา"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={this.handleChange('words')}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-search" />
                        </InputAdornment>
                      )
                    }}
                  />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category">ประเภท</InputLabel>
                <Select
                  native
                  value={this.state.age}
                  onChange={this.handleChange('category')}
                  inputProps={{
                    name: 'category',
                    id: 'category',
                  }}
                >
                  <option value="" />
                 {data && data.category && data.category.map(function(e,i){
                   return <option   key={e.id} value={e.id}>{e.name}</option>
                 })}
                 
                </Select>
               </FormControl>
               <Button onClick={this.handleTermSearch}>
                  ค้นหา
                </Button>
              </GridItem>
            
            </GridContainer>
          </div>
          <div className={classes.space70} />
        
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
