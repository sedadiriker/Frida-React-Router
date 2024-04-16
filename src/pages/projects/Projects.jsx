import "./Projects.scss"
import {data} from "../../helper/paints-data"

const Projects = () => {
  console.log(data)
  return (
    <div className="projects">
      <div className="image"></div>
      <div className="paints">
    {
      data.map(paint => (
        <div key={paint.id} className="card">
          <img src={paint.imageUrl} alt="" />
          <p className="paint-name">{paint.name}</p>
        </div>
      ))
    }
      </div>
    </div>
  )
}

export default Projects
