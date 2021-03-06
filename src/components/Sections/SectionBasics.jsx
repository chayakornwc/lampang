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
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
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
                 {data && data.data && data.data.map(function(e,i){
                   return <option value={e.id_cat}>{e.cat_type}</option>
                 })}
                </Select>
               </FormControl>
               <Button color="default">
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
