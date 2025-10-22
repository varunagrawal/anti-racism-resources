import React from "react"
import resources from "../../../content/resources/books.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function Books() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(i, book) {
  return (
    <li key={i}>
      <Link href={book.link}>{book.title}</Link> <Author book={book} />
    </li>
  )
}

function Author(props) {
  if (props.book.author) {
    return <span>by {props.book.author}</span>
  }
  return ""
}
