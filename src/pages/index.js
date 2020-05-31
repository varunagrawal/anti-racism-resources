import React from "react"
import { Container } from "react-bootstrap"
import Resources from "../components/resources"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Container>
      <p>
        This website is intended to serve as a resource to white people and parents to deepen our anti-racism work. If you haven’t engaged in anti-racism work in the past, start now. Feel free to circulate this website on social media and with your friends, family, and colleagues.
      </p>

      <p>
        Here is a link to the original document: <a href="bit.ly/ANTIRACISMRESOURCES">bit.ly/ANTIRACISMRESOURCES</a>
      </p>
      <p>
        To take immediate action to fight for Breonna Taylor, please visit <a href="FightForBreonna.org">FightForBreonna.org</a>.
      </p>

      <Resources />

    </Container>

  </Layout>
)
