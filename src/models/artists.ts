export type ArtistProps = {
    
    info:{
      name: string,
      image: string,
      genre: string
    },

    content:{
      country: string,
      albums: string[],
      legend: boolean
    }
}