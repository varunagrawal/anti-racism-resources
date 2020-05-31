import React from "react"
import resources from "../../../content/resources/books.yaml"
import { createList } from "../../utils"

export function Books() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(book) {
  return (
    <li>
      <a href={book.link} target="_blank">{book.title}</a> <Author book={book} />
    </li>
  )
}

function Author(props) {
  if (props.book.author) {
    return <span>by {props.book.author}</span>
  }
  return ""
}
