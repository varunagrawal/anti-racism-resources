import React from "react"
import resources from "../../../content/resources/videos.yaml"
import { createList } from "../../utils"

export function Videos() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(video) {
  return (
    <li>
      <a href={video.link} target="_blank">{video.title}</a>
    </li>
  )
}
