import React from "react"
import { Helmet } from "react-helmet"

export function Head({ data }) {
  return (
    <Helmet
      title="Anti-Racism Resources"
      meta={[
        {
          name: "description",
          content: "Anti-Racism Resources",
        },
        {
          name: "keywords",
          content: "equality, anti-racism, resources, white, black",
        },
      ]}
      link={[
        {
          // Bootstrap
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          integrity:
            "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
          crossorigin: "anonymous",
        }
      ]}
    >
      <html lang="en-US" amp />

      <script
        src="https://kit.fontawesome.com/d58dae4cfc.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}
