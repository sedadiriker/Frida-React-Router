import "./Projects.scss";
import { data } from "../../helper/paints-data";
import { useState } from "react";

const Projects = () => {
  const [selectedPaint, setSelectedPaint] = useState(null);

  const handleClickPaint = (paint) => {
    setSelectedPaint(paint);
  };

  return (
    <div className="projects">
      <div className="image"></div>
      <div className="paints">
        {data.map((paint) => (
          <div key={paint.id} className="card" onClick={() => handleClickPaint(paint)}>
            <img src={paint.imageUrl} alt="" />
            <p className="paint-name">{paint.name}</p>
            {/* Resmin altında açıklama */}
            {selectedPaint && paint.id === selectedPaint.id && (
              <div className="selected-paint-description">
                <p>{selectedPaint.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
