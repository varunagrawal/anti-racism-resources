import React from "react"
import resources from "../../../content/resources/media.yaml"
import { Link } from "../../components/link"
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
      {media.title} on <Link href={media.link}>{media.provider}</Link>
    </li>
  )
}
