import projectImg from "../assets/placeholder.jpg";

function Projects() {
  return (
    <>
      <div className="flex gap-12 items-center justify-center">
        <div className="flex flex-col shadow-2xl w-1/6 max-w-1/6">
          <img src={projectImg} alt="" className="rounded-t-xl" />
          <div className="basis-3/4 bg-white flex flex-col justify-center items-center p-2">
            <h3 className="text-xl font-bold">Conf Twitter Bot</h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              possimus, porro dicta praesentium consequuntur sint quos
              exercitationem voluptatum aperiam, ab dignissimos totam dolores
              eaque officiis animi incidunt? Cupiditate, iusto minus.
            </p>
          </div>
          <div className="basis-1/4 w-full bg-slate-200 px-4 py-1 rounded-b-xl">
            <h3 className="font-bold mb-1">Technologies: </h3>
            <div className="flex gap-1 flex-wrap">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Typescript</div>
              <div className="badge badge-outline">Koa (NodeJS)</div>
              <div className="badge badge-outline">PrismaORM (Postgres)</div>
              <div className="badge badge-outline">Docker</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-2xl w-1/6 max-w-1/6">
          <div className="basis-3/4 bg-white flex flex-col justify-center items-center rounded-t-xl">
            <img src={projectImg} alt="" className="rounded-t-xl" />
            <h3 className="text-xl font-bold">Conf Twitter Bot</h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              possimus, porro dicta praesentium consequuntur sint quos
              exercitationem voluptatum aperiam, ab dignissimos totam dolores
              eaque officiis animi incidunt? Cupiditate, iusto minus.
            </p>
          </div>
          <div className="basis-1/4 w-full bg-slate-200 px-4 py-1 rounded-b-xl">
            <h3 className="font-bold mb-1">Technologies: </h3>
            <div className="flex gap-1 flex-wrap">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Typescript</div>
              <div className="badge badge-outline">Koa (NodeJS)</div>
              <div className="badge badge-outline">PrismaORM (Postgres)</div>
              <div className="badge badge-outline">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

//could make a component for project card
