import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../actions/homePageActions'
import { Link } from 'react-router-dom'


class Listing extends Component {
    componentDidMount() {
        getCategory(this.props.match.params.slug)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.slug != this.props.match.params.slug) {
            getCategory(newProps.match.params.slug)
        }
    }

    render() {
        return(
            <div>
              {this.props.categoryName
            }
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      categoryName: appState.homePageReducer.currentCategory.name
    }
  }
  
  export default connect(mapStateToProps)(Listing)