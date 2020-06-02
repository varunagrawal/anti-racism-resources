import React from "react"
import resources from "../../../content/resources/videos.yaml"
import { Link } from "../../components/link"
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
      <Link href={video.link}>{video.title}</Link>
    </li>
  )
}
