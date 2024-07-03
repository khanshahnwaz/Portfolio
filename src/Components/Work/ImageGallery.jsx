import ImageGall from "react-image-gallery";
import React from 'react'
import first from '../Assets/first.png'
import second from '../Assets/second.png'
import third from '../Assets/third.png'
import fourth from '../Assets/fourth.png'
import fifth from '../Assets/fifth.png'
import sixth from '../Assets/sixth.png'
import seventh from '../Assets/seventh.png'
import eighth from '../Assets/eighth.png'
import nineth from '../Assets/nineth.png'
import tenth from '../Assets/tenth.png'
import eleventh from '../Assets/eleventh.png'
const images = [
  {
    original: first,
    thumbnail: first,
    description:'Data management application landing page',
    
    
  },
  {
    original: second,
    thumbnail: second,
    description:'Login form'
  },
  {
    original: third,
    thumbnail:third,
    description:'SignUp form'

  },
  {
    original: fourth,
    thumbnail:fourth,
    description:'Dasboard for user to see added publications'

  },
  {
    original:fifth,
    thumbnail:fifth,
    description:'Profile management applicatoin landing page'
  },
  {
    original:sixth,
    thumbnail:sixth,
    description:'Dashboard to handle connections'
  },
  
  {
    original:seventh,
    thumbnail:seventh,
    description:'Dashboard for product management'
  },
  {
    original:eighth,
    thumbnail:eighth,
     description:'Dashboard for todo list management'
  },
  {original:nineth,
    thumbnail:nineth,
    description:'Landing page'
  },
  {
    original:tenth,
    thumbnail:tenth,
    description:'Image gallery with infinite scrolling, dynamic search suggestion etc.'
  },
  
 
  {original:eleventh,
    thumbnail:eleventh,
    description:'Detailed image view'
  },
  
];


export const ImageGallery = () => {
  return (
    <ImageGall lazyLoad thumbnailPosition="right" useBrowserFullscreen={false} showNav={false} autoPlay={true} onErrorImageURL="Some error ocurred while loading!"  items={images}/>
  )
}
