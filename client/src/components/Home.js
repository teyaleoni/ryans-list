import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/homePageActions'
import '../styles/home.css'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className="homeContainer">

        <div className="allContent">

          <div className="sidebar"> </div>

            <div className="box">
              <h2 className="city">Las Vegas</h2>

              <div className="catBox">
                {this.props.categories.map(data => (
                    <div className="subcat">
                      <h2>{data.name}</h2>
                      {data.subcat.map(x => (<div className="title">{x.name}</div>))}
                    </div>
                  ))}
              </div>

            </div>


          </div>

      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    categories: appState.homePageReducer.categories
  }
}

export default connect(mapStateToProps)(Home)