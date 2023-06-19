import logo from './../logo.svg';
import './Card.css'
import { ArtistProps } from '../../models/artists';
import 'bootstrap/dist/css/bootstrap.css';

export const Card = (props: ArtistProps) => {
  const { info, content } = props;
  
  return (
      <div className='card-container col-md-6 col-lg-4 pt-4'>
        <div className='card-info'>
          <h1>{info.name} ({info.genre})</h1>
          <img className='img-fluid' src={info.image}></img>
        </div>

        <div className='card-content'>
          <p>{content.country}</p>
          <p>{content.albums.join(', ')}</p>
        </div>
      </div>
  )
}

export const CardLoader = () => {
    
    return (<div className="card is-loading">
    <div className="image"></div>
    <div className="content">
      <h2></h2>
      <p></p>
    </div>
  </div>)
}