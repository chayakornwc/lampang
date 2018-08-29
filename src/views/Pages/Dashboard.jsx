import React, { Component } from 'react'

import {loadSurvey}from '../../redux/actions/survey';
import {Pie} from 'react-chartjs-2';

import {connect} from 'react-redux'
class Dashboard extends Component {

    componentDidMount(){
      this.props.dispatch(loadSurvey());
    }
  
    
 
  render() {
      const {survey} = this.props
  var  data = {
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
  }],
  labels: [
   
   
  ]
    }
    var  _data = {
      datasets: [{
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ]
    }],
    labels: [
     
     
    ]
      }
      
     {survey &&  survey.data && survey.data.age.map((e,i)=>{
        data.datasets[0].data = [...data.datasets[0].data, e.age]
        data.labels = [...data.labels, e._key]
     })}
     {survey &&  survey.data && survey.data.provider.map((e,i)=>{
      _data.datasets[0].data = [..._data.datasets[0].data, e.sumary]
      _data.labels = [..._data.labels, e.provider]
   })}
    return (
      <div style={{display:'block',width:'100%',zIndex:'999',marginTop:'999'}}>
              <Pie data={data} options={data.options}  width="400px" />
              <Pie data={_data} options={data.options} width="400px" />
      </div>
    )
  }
}

function  mapStateToProps (state)  {
  return {
    survey: state.surveyReducers.survey
  }
}
export default connect(mapStateToProps)(Dashboard)


