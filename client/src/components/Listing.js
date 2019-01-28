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
              {this.props.match.params.slug}
              {this.props.currentCategory.listings.map(listing => (
                  <div key={"listing" + listing.id}>{listing.listingName}</div>
              ))}
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      currentCategory: appState.homePageReducer.currentCategory
    }
  }

  
  
  export default connect(mapStateToProps)(Listing)