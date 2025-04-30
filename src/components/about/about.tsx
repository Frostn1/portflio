const About = () => {
  return (
    <div id={"about"}>
      <h1 className="text-3xl flex flex-col gap-1">About</h1>
      <div className="grid sm:grid-cols-2 gap-10">
        <p className="text-wrap md:w-md text-(--subtext)">
          I'm Sean Dahan, a young and ambitious individual.
          <br />
          I love to learn and further progress my knowledge and toolset.
          <br />I strive for greatness and don't stop until I achieve it.
        </p>
        <img className="justify-self-center max-w-[300px]" src={"sean-self.jpg"}/>
      </div>
    </div>
  );
};

export default About;
