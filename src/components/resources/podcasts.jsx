import React from "react"
import resources from "../../../content/resources/podcasts.yaml"
import { createList } from "../../utils"

export function Podcasts() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(podcast) {
  return (
    <li>
      <a href={podcast.link} target="_blank">{podcast.title}</a>
    </li>
  )
}
