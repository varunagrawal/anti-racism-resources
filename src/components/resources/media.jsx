import React from "react"
import resources from "../../../content/resources/media.yaml"
import { createList } from "../../utils"

export function Media() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(media) {
  return (
    <li>
      {media.title} on <a href={media.link} target="_blank">{media.provider}</a>
    </li>
  )
}
