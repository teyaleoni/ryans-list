import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/homePageActions'
import '../styles/home.css'
import { Link } from 'react-router-dom'


class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className="homeContainer">

        <div className="allContent">

          <div className="sidebar"> 
            <h1>ryanslist</h1>
            <Link to = "./Posting"><p>Create a posting</p></Link>
          </div>

            <div className="box">
              <h2 className="city">Las Vegas</h2>
                <div className="catBox">
                  {this.props.categories.map(data => (
                      <div key={`${data.name}`} className="subcat">
                        <Link to={`/${data.slug}`}><h2>{data.name}</h2></Link>
                        {data.subcat.map(x => (<div key={`${x.name}`}className="title">
                        <Link to={`/${x.slug}/${x.id}`}>{x.name}</Link>
                        </div>))}
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