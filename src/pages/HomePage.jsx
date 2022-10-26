import React from "react";
import Header from "../components/Header";
import CurrentTime from "../components/CurrentTime";
import StopWatch from "../components/StopWatch";
function HomePage() {
  return (
    <div>
      <Header />
      <CurrentTime />
      <StopWatch />
    </div>
  );
}

export default HomePage;
