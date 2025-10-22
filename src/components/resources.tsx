import { Container } from "react-bootstrap";
import { Articles } from "./resources/articles";
import { Books } from "./resources/books";
import { General } from "./resources/general";
import { Letter } from "./resources/letter";
import { Media } from "./resources/media";
import { More } from "./resources/more";
import { Organizations } from "./resources/organizations";
import { Podcasts } from "./resources/podcasts";
import { Videos } from "./resources/videos";

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
    <br />
    <Letter />
  </Container>
);
