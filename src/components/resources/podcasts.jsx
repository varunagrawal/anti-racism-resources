import React from "react"
import resources from "../../../content/resources/podcasts.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function Podcasts() {
  return (
    <div>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </div>
  )
}

function format(i, podcast) {
  return (
    <li key={i}>
      <Link href={podcast.link}>{podcast.title}</Link>
    </li>
  )
}
