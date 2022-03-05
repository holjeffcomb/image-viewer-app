import React, { useState, useEffect } from "react";

const Viewer = () => {
  const [albums, setAlbums] = useState([]);
  const albumUrl = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
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
  }, []);

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
