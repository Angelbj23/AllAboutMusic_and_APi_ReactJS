import React, { useContext, useState, useEffect} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import '../Artists.css'
import { Card, CardLoader } from '../../Card/Card';
import axios from 'axios';
import { ArtistProps } from '../../../models/artists';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Pop = () => {
  const { darkMode, fontSize } = useContext(ThemeContext);
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchPopArtists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/artists/pop');
        setArtists(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching pop artists:', error);
      }
    };

    fetchPopArtists();
  }, []);

  return (
    <div className={`row artist ${darkMode ? 'dark' : 'light'}`} style={{ fontSize: `${fontSize}px` }}>
      {isLoading ? (
        <CardLoader />
      ) : (
        artists.map((artist) => (
          <Card key={artist.info.name} info={artist.info} content={artist.content} />
        ))
      )}
    </div>
  );
};
