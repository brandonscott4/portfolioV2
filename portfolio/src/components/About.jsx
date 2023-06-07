function About() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 items-stretch w-2/3">
        <div className="w-1/2 bg-white p-12 rounded-xl shadow-2xl">
          <h1 className="text-lg font-bold underline mb-3">About Me</h1>
          <p> I am a developer based in the UK (England) 📍.</p>
          <br />
          <p>
            Currently in my final year of my Computer Science degree&nbsp;
            <span
              className="link link-primary"
              onClick={() => window.my_modal_1.showModal()}
            >
              (see more)
            </span>
            , and looking to break into the tech industry. Learning new
            technologies and enhancing my knowledge of familair ones is a
            rewarding journey, that I am thoroughly enjoying.
          </p>
          <br />
          <p>
            In my free time I enjoy watching/playing football, playing video
            games on my PC (which I built myself) and reading.
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
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box max-w-3xl">
            <h3 className="font-bold text-lg mb-4">Degree Summary 📜</h3>

            <div className="flex gap-10">
              <div>
                <h4 className="underline">First Year</h4>
                <ul>
                  <li>Introduction to Object-Oriented Programming - 98</li>
                  <li>Further Object-Oriented Programming - 89</li>
                  <li>Foundations of Computing I - 98</li>
                  <li>Foundations of Computing II - 91</li>
                  <li>Databases and the Web - 92</li>
                  <li>Human Computer Interaction - 85</li>
                  <li>Computers and the Cloud - 71</li>
                  <li>Problem Solving with Algorithms -83</li>
                </ul>
              </div>

              <div>
                <h4 className="underline">Second Year</h4>
                <ul>
                  <li>Algorithms, Correctness and Efficiency - 96</li>
                  <li>Introduction to Artificial Intelligence - 94</li>
                  <li>Database Systems - 93</li>
                  <li>Web Development - 100</li>
                  <li>Functional Programming - 99</li>
                  <li>Computer Systems - 92</li>
                  <li>Introduction to Cyber Security - 89</li>
                  <li>Software Development - 87</li>
                </ul>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default About;
