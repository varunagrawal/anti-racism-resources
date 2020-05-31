import React from "react"
import { Container } from "react-bootstrap"
import { General } from "./resources/general"
import { Articles } from "./resources/articles"
import { Videos } from "./resources/videos"
import { Podcasts } from "./resources/podcasts"
import { Books } from "./resources/books"
import { Media } from "./resources/media"
import { Organizations } from "./resources/organizations"
import { More } from "./resources/more"

export default () => (
  <Container>
    <General />
    <br />
    <Articles />
    <br />
    <Videos />
    <br />
    <Podcasts />
    <br />
    <Books />
    <br />
    <Media />
    <br />
    <Organizations />
    <br />
    <More />
  </Container>
)
