import React from "react"
import Helmet from "react-helmet"

const styles = {
  container: {
    display: "block",
    height: "100vh",
    width: "100%",
    position: "relative",
    backgroundColor: "#171c28",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "18px",
    textAlign: "left",
    height: "100%",
  },
  content: {
    display: "block",
    fontSize: `${20 / 16}rem`,
    lineHeight: "1.9rem",
    color: "#afafbf",
  },
}

const Home = () => {
  return (
    <>
      <Helmet title="Adjie Guntoro" meta={[
        {name: `google-site-verification`, content: `OTuQ7fT2JRzxJM3eW0Hn2lDDXLAtBY8iiIZ2EnciS8g`}
      ]}/>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <code style={styles.content}>
            Hi There! 👋
            <br />
            <br />
            <br />
            Adjie Guntoro is here.
            <br />
            <br />
            I'm a {(new Date()).getFullYear() - 1995} years old. Currently, I work as Sofware Engineer at Tech
            Company in Jakarta.
            <br />
            Web development enthusiast, movies and also books!
            <br />
            em: adjie1607@gmail.com | tw:{" "}
            <a target="_blank" href="https://twitter.com/adjieguntoro">
              @adjieguntoro
            </a>
          </code>
        </div>
      </div>
    </>
  )
}

export default Home
