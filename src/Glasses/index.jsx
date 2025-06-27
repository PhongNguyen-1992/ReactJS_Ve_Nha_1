import { useState } from "react";
import data from "./data.json";
import "../Glasses/style.css";

export default function Glasse_opt() {
  const [isGlasse, setGlasse] = useState(data); // State hiện list kính
  const [selectedGlass, setSelectedGlass] = useState(null); // State kính dduowjc chọn
// Lấy toàn bộ thông tin của kính
  const handleGlassClick = (glassItem) => {
    setSelectedGlass(glassItem); 
  };
// render lại danh sách kính để click chọn
  const renderListGlasse = () => {
    const listGlasse = isGlasse.map((user, index) => {
      return (
        <li key={index}>
          <button onClick={() => handleGlassClick(user)}>
            <img src={user.url} alt={`Image ${index}`} />
          </button>
        </li>
      );
    });
    return listGlasse;
  };

  return (
    <div className="container">
      <h1>Thử Kính Trực Tuyến</h1>
      <div className="model-container">
        <img src="./glassesImage/model.jpg" className="model" alt="" />
        {/* Div hiển thị kính được chọn */}
        <div className="glasses-overlay">
          {selectedGlass && (
            <img 
              src={selectedGlass.url} 
              alt="Selected glasses" 
              className="selected-glasses"
            />
          )}
        </div>
      </div>
            {/* Hiển thị thông tin kính bên ngoài */}
      {selectedGlass && (
        <div className="glasses-info">
          <h3>{selectedGlass.name}</h3>
          <p>{selectedGlass.desc}</p>
          <p><strong>Giá:</strong> ${selectedGlass.price}</p>
        </div>
      )}
      
      <ul className="listGlasse_css">{renderListGlasse()}</ul>
    </div>
  );
}