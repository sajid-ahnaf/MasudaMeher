import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Web Developer.")
          .pause(750)
          .delete(14)
          .pause(500)
          .type("Flutter Developer.")
          .pause(750)
          .delete(18)
          .type("OpenSource Contributor.");

        // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;
