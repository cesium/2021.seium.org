import React from "react";
import Intro from "./intro/intro";
import Carousel from "./agenda/carousel-home";
import Footer from "../footer";
import Speakers from "./speakers";

function Home() {
  return (
    <div>
      <Intro />
      <Carousel
        style={{ background: "#181818", paddingLeft: "5%", paddingRight: "5%" }}
      />
      <Speakers
        style={{
          background: "rgb(20, 42, 62)",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      />
      <Footer style={{ background: "#0e1d2a" }}>
        Psst. Have you checked the <a href="/challenges">challenges</a>? Just
        saying.
      </Footer>
    </div>
  );
}

export default Home;

//#181818
//rgb(20, 42, 62)
//#0e1d2a
//#181818