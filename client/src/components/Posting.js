import React, { Component } from 'react'
import { post, getCategories } from '../actions/homePageActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/posting.css'



class Posting extends Component {
    state = {
        listingName: "",
        coverPhoto: "",
        cityId: 1,
        categoryId: 0,
        text: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        post(this.state)
        this.setState({
            listingName: "",
            coverPhoto: "",
            cityId: 1,
            categoryId: 0,
            text: ""
            
        })
    }

    componentDidMount() {
        getCategories()
    }

    render () {
        var selectArray = []
        this.props.categories.forEach(parent => {
            parent.subcat.forEach(cat => (
                selectArray.push(<option value={`${cat.id}`} key={`selectcat${cat.id}`}>{cat.name}</option>)
            ))
        })

        return (
            <div className="postingContainer">
                <Link to ='/'>Home</Link>
                <h1 id="maintitle">create a posting</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input 
                        id="formtitle"
                        onChange={this.handleChange}
                        type="text" 
                        name="listingName"
                        value={this.state.listingName}
                        placeholder="Title">
                    </input>

                    <textarea
                        id="description"
                        onChange={this.handleChange}
                        value={this.state.text}
                        name="text"
                        cols="50"
                        placeholder="Description"
                    >
                    </textarea>

                    <select 
                        id="select"
                        onChange={this.handleChange} 
                        name="categoryId" 
                        defaultValue=""
                        required
                    >

                    <option value="" disabled hidden>Choose category</option>
                    {selectArray}
                    </select>

                    <input
                        id="image"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.coverPhoto}
                        name="coverPhoto"
                        placeholder="Insert Image">
                    </input>

                    <button onClick={this.handleSubmit} id="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
      categories: appState.homePageReducer.categories
    }
  }
  

export default connect(mapStateToProps)(Posting)
