function About() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 items-stretch w-2/3">
        <div className="w-1/2 bg-white p-12 rounded-xl shadow-2xl">
          <h1 className="text-lg font-bold underline mb-3">About Me</h1>
          <p> I am a developer based in the UK (England) 📍.</p>
          <br />
          <p>
            Currently in my final year of my Computer Science degree (see more),
            and looking to break into the tech industry. Learning new
            technologies and enhancing my knowledge of familair ones is a
            rewarding journey, that I am througly enjoying.
          </p>
          <br />
          <p>
            In my free time I enjoy watching/playing football, playing video
            games on my PC (which I built myself!) and reading.
          </p>
        </div>

        <div className=" bg-white p-12 rounded-xl shadow-2xl ">
          <h1 className=" text-lg font-bold underline mb-8">
            Skills/Technologies
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="tooltip" data-tip="Typescript">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="React">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="Java">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="Python">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="MySQL">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="TailwindCSS">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="Express">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="NodeJS">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                className="w-14 h-14"
              />
            </div>

            <div className="tooltip" data-tip="Github">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
