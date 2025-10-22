import React from "react"
import resources from "../../../content/resources/media.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function Media() {
  return (
    <div>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </div>
  )
}

function format(i, media) {
  return (
    <li key={i}>
      {media.title} on <Link href={media.link}>{media.provider}</Link>
    </li>
  )
}
