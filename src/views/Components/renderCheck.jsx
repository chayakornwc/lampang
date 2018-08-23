import React, { Component } from 'react'

export default class renderCheck extends Component {
  constructor(props){
    super(props)
    this.state ={
      selected:null,
    }
  }
  render() {
    return (
      <div>
        <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selected === "a"}
                            onChange={this.handleChangeEnabled}
                            value="a"
                            {...input}
                            aria-label="A"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="First Radio"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedEnabled === "b"}
                            onChange={this.handleChangeEnabled}
                            value="b"
                            name="radio button enabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Second Radio"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        disabled
                        control={
                          <Radio
                            checked={false}
                            value="a"
                            name="radio button disabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio,
                              disabled: classes.disabledCheckboxAndRadio
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Disabled Unchecked Radio"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        disabled
                        control={
                          <Radio
                            checked={true}
                            value="b"
                            name="howold"
                            aria-label="B"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord className={classes.radioChecked} />
                            }
                            classes={{
                              checked: classes.radio,
                              disabled: classes.disabledCheckboxAndRadio
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="Disabled Checked Radio"
                      />
                    </div>
        
      </div>
    )
  }
}
