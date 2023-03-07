import React from 'react';
import AlbumComponent from 'components/Albums';
import Header from 'components/Header';

import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="grid-parent">
        {data.albums.items.map((singleAlbum) => (
          <AlbumComponent key={singleAlbum.id} album={singleAlbum} />
        ))}
      </div>
    </main>
  );
}
export default App;
