import React from "react"
import resources from "../../../content/resources/more.yaml"
import { Link } from "../../components/link"
import { createList } from "../../utils"

export function More() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(item) {
  return (
    <li>
      <Link href={item.link}>{item.title}</Link>
    </li>
  )
}
