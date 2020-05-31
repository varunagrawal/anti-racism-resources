import React from "react"
import resources from "../../../content/resources/organizations.yaml"
import { createList } from "../../utils"

export function Organizations() {
  return (
    <>
      <h3>{resources.title}</h3>
      <ul>{createList(resources.list, format)}</ul>
    </>
  )
}

function format(organization) {
  return (
    <li>
      {organization.title}{"\t\t"}<SocialMedia name="Twitter" link={organization.twitter} /><SocialMedia name="Instagram" link={organization.instagram} separator="true" /><SocialMedia name="Facebook" link={organization.facebook} separator="true" />
    </li>
  )
}

function SocialMedia(props) {
    if (props.link)
        return <button type="button" class="btn btn-light"><a href={props.link} target="_blank">{props.name}</a></button>
    else return ""
}
