import React from "react"
import resources from "../../../content/resources/articles.yaml"
import { createList } from "../../utils"

export function Articles() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(article) {
  return (
    <li>
      <a href={article.link} target="_blank">
        "{article.title}"
      </a>{" "}
      <Author article={article} /> <Publisher article={article} />{" "}
      <Date article={article} />
    </li>
  )
}

function Author(props) {
  console.log(props.article.author)
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
