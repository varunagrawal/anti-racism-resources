import React from "react"
import { createList } from "../../utils"
import resources from "../../../content/resources/general.yaml"

export function General() {
  return (
    <>
      <h3>{resources.title}</h3>
      <h5>Books</h5>
      {createList(resources.books, format)}
      <h5>Podcasts</h5>
      {createList(resources.podcasts, format)}
      <h5>Articles</h5>
      {createList(resources.articles, format)}
    </>
  )
}

function format(resource) {
  return (
    <li>
      <a href={resource.link} target="_blank">
        {resource.title}
      </a>
    </li>
  )
}
