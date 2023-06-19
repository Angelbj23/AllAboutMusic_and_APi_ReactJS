import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import '../Artists.css';
import { Card, CardLoader } from '../../Card/Card';
import axios from 'axios';
import { ArtistProps } from '../../../models/artists';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const All = () => {
  const { darkMode, fontSize } = useContext(ThemeContext);
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);

  const itemsPerPage = 12;

  const fetchArtists = async () => {
    try {
      const response = await axios.get('http://localhost:5000/artists/all', {
        params: { page: currentPage, limit: itemsPerPage, name: searching ? searchTerm : undefined },
      });
      setArtists(response.data.items);
      setTotalPages(response.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching artists:', error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, [currentPage, searching, searchTerm]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setCurrentPage(1);
    setSearching(true);
    setArtists([]);
  };

  return (
    <div className={`row artist ${darkMode ? 'dark' : 'light'}`} style={{ fontSize: `${fontSize}px` }}>
      <div className="search-bar pt-5">
        <input className='input-text' type="text" placeholder="Filter By Name" value={searchTerm} onChange={handleSearch} />
        <button className='btn-styled ms-4' onClick={handleSearchButtonClick}>Search</button>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        <>
          {artists.map((artist) => (
            <Card key={artist.info.name} info={artist.info} content={artist.content} />
          ))}
          <div className='buttons-styled d-flex justify-content-center'>
            <button className='btn-styled alt' onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button className='btn-styled' onClick={goToNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};