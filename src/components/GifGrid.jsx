
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category);

  console.log(images,isLoading);
  


 /* const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const newImages = await gefGifs(category);
    setImages(newImages);
    console.log(newImages);
  };*/

  return (
    <>
      <h3>{category}</h3>
      {
            isLoading&&(<h2>Cargando...</h2>)

      }

      
      <div className="card-grid">
        {images.map((image) => (
             <GiftGridItem 
             key={image.id}
            {...image}
              />
        ))}
      </div>
    </>
  );
};
