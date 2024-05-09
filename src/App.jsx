import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images = imageData();
const imageComponents = [];

images.forEach(image => {
  imageComponents.push(
    <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
  );
});

return (
  <div className="imageContainer">
    {imageComponents}
  </div>
);

}

export default App;
