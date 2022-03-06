import React, { useState, useEffect } from "react";

const Viewer = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const albumUrl = "https://jsonplaceholder.typicode.com/albums";
  const photoUrl = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    // fetch albums
    fetch(albumUrl)
      .then((response) => {
        if (!response.ok) {
          return Error("Oh noes");
        }
        return response.json();
      })
      .then((json) => {
        setAlbums(json);
      });

    // fetch photos
    fetch(photoUrl)
      .then((response) => {
        if (!response.ok) {
          return Error("Oh noezzz");
        }
        return response.json();
      })
      .then((json) => {
        setPhotos(json);
      });
  }, []);

  const getPhotos = (albumId) => {
    const albumPhotos = photos.filter((photo) => (photo.albumId = albumId));
  };

  return (
    <div>
      <h1>Viewer</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <p>Album Title: {album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
