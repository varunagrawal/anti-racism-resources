import React from "react"
import resources from "../../../content/resources/general.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function General() {
  return (
    <div>
      <h3>{resources.title}</h3>
      <h4>Books</h4>
      {createList(resources.books, format)}
      <br />

      <h4>Podcasts</h4>
      {createList(resources.podcasts, format)}
      <br />

      <h4>Articles</h4>
      {createList(resources.articles, format)}
      <br />
    </div>
  )
}

function format(i, resource) {
  return (
    <li key={i}>
      <Link href={resource.link}>{resource.title}</Link>
    </li>
  )
}
