import React, { useContext, useState, useEffect} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import '../Artists.css'
import { Card, CardLoader } from '../../Card/Card';
import axios from 'axios';
import { ArtistProps } from '../../../models/artists';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Metal = () => {
  const { darkMode, fontSize } = useContext(ThemeContext);
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchMetalArtists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/artists/metal');
        setArtists(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching metal artists:', error);
      }
    };

    fetchMetalArtists();
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
