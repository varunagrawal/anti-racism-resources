import React from "react"
import resources from "../../../content/resources/more.yaml"
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
      <a href={item.link} target="_blank">{item.title}</a>
    </li>
  )
}
