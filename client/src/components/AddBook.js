import React, { Component } from "react"
import { graphql } from "react-apollo"

import { getAuthorsQuery } from "../queries/queries"

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: "",
  }

  displayAuthors = () => {
    const { data } = this.props
    if (data.loading) {
      return <option disabled>Loading Authors...</option>
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={this.handleChange}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button type="submit">+</button>
      </form>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook)
