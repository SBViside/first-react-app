import React from "react";
import ModernLoader from "./UI/loader/ModernLoader";
import MyModal from "./UI/modal/MyModal";

export function PhotoList({ photos, isPhotosLoading, ...props }) {
  const [modal, setModal] = React.useState(false);
  const [currentPhoto, setCurrentPhoto] = React.useState({});

  const lookAtImage = (photo) => {
    setCurrentPhoto(photo);
    setModal(true);
  };

  return (
    <ul {...props} className="photoList">
      {isPhotosLoading ? (
        <ModernLoader style={{ margin: "250px auto" }} />
      ) : (
        photos.map((p) => (
          <li onClick={() => lookAtImage(p)} key={p.id} className="photoItem">
            <div className="photoItem__text">
              <h1>
                {p.id}. {p.title}
              </h1>
            </div>
            <img src={p.url} alt="ERROR" />
          </li>
        ))
      )}
      <MyModal
        style={{ padding: "20px" }}
        visible={modal}
        setVisible={setModal}
      >
        <div className="showImage">
          <img src={currentPhoto.url} alt="ERROR" />
          <p>{currentPhoto.title}</p>
        </div>
      </MyModal>
    </ul>
  );
}
