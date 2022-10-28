import React from "react";
import Header from "../components/Header";
import CurrentTime from "../components/CurrentTime";
import StopWatch from "../components/StopWatch";
function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex md:flex-row items-center content-center sm:flex-col gap-2">
        <CurrentTime />
        <StopWatch />
      </div>
    </div>
  );
}

export default HomePage;
