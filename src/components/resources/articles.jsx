import React from "react"
import resources from "../../../content/resources/articles.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function Articles() {
  return (
    <div>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </div>
  )
}

function format(i, article) {
  return (
    <li key={i}>
      <Link href={article.link}>
        "{article.title}"
      </Link>{" "}
      <Author article={article} /> <Publisher article={article} />{" "}
      <Date article={article} />
    </li>
  )
}

function Author(props) {
  if (props.article.author) {
    return <span>by {props.article.author}</span>
  }
  return ""
}

function Publisher(props) {
  if (props.article.publisher) {
    return <span>| {props.article.publisher}</span>
  }
  return ""
}

function Date(props) {
  if (props.article.date) {
    return <span>({props.article.date})</span>
  }
  return ""
}
