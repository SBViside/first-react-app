import React from "react";
import { PhotoService } from "../API/PhotoService";
import useFetching from "../hooks/useFetching";
import { PhotoList } from "../components/PhotoList";

export default function Photos(props) {
  document.title = `Список фотографий`;

  const [photos, setPhotos] = React.useState([]);
  const [getPhotos, isPhotosLoading, error] = useFetching(async () => {
    const response = await PhotoService.GetByLimitAndPage(100, 1);
    setPhotos(response.data);
  });

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="container">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Список всех фотографий
      </h1>
      <PhotoList photos={photos} isPhotosLoading={isPhotosLoading} />
    </div>
  );
}
