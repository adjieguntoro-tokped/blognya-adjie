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
    fontSize: `${14 / 16}rem`,
    color: "#afafbf",
  },
}

const Home = () => {
  return (
    <>
      <Helmet title="Adjie Guntoro" />
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <code style={styles.content}>
            Hi, There! <br />
            Adjie Guntoro is here.
            <br />
            Currently work as Sofware Engineer at Tech Company in Jakarta,
            Indonesia.
            <br />
            Web Development enthusiast, movies and also books!
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
