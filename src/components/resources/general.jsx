import React from "react"
import resources from "../../../content/resources/general.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

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
      <Link href={resource.link}>{resource.title}</Link>
    </li>
  )
}
