import React, { useState, useContext } from "react";

import useFetch from "../Shared/Hooks/useFetch";
import SelectCategory from "../Components/SelectCategory";
import ImageItem from "../Components/ImageItem";
import Spinner from "../Shared/UI/Spinner";
import { Language } from '../Shared/Context'

import './ImagesCollection.scss'

const ImagesCollection = (props) => {

  const [category, setCategory] = useState("");

  const eng = useContext(Language).english

  let url = `https://pixabay.com/api/?key=17350352-f1cf078978a263f4da596de4c&q=${encodeURI(
    category
  )}&image_type=photo&page=2&per_page=40&orientation=vertical`;

  const collection = useFetch(url, category);

  if (collection.error) {
    props.history.push('/error');
  }

  let images = null

  if (collection.data) {

    if (collection.data.length > 0) {
      images = <div className="ImagesCollection__gallery">
        {
          collection.data.map((img) => {
            return (
              <ImageItem
                key={img.id}
                src={img.webformatURL}
                alt={img.tags}
                image={img.webformatURL}
                clicked={() => clickedHanlder(img.id)}
              />
            );
          })
        }
      </div>
    }
    else {
      images = <h1 className="error_message">{eng ? `Sorrie, we didn't find images for the "${category}" category...` :
        `Lo sentimos, no existen resultados para la categoria "${category}"...`}</h1>
    }

  }

  const clickedHanlder = (id) => {
    props.history.push(`/${id}`);
  };

  console.log(collection.data)

  return (
    <div className="ImagesCollection">
      <h1
        className="ImagesCollection__heading-primary"
      >
        Custom-Cards
      </h1>
      <SelectCategory
        setCategory={setCategory}
      />
      {collection.loading && <Spinner />}
      {images}

    </div>
  );
};

export default ImagesCollection;



/*         className={
  "ImagesCollection__heading-primary " +
  (collection.data > 0 && "ImagesCollection__heading-primary--categoryAdded")
} */