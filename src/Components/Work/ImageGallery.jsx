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
import twelveth from '../Assets/twelveth.png'
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
    description:'Profile section where user can connect to new users or remove existing connections (as linkedin)'
  },
  
  {
    original:seventh,
    thumbnail:seventh,
    description:'Developed dashboard for product management'
  },
  {
    original:twelveth,
    thumbnail:twelveth,
    description:'Image gallery with infinite scrolling, dynamic search suggestion etc.'
  },
  // {
  //   original:eighth,
  //   thumbnail:eighth,

  // },
  // {
  //   original:nineth,
  //   thumbnail:nineth,
  // },
  // {original:tenth,
  //   thumbnail:tenth
  // },
  {original:eleventh,
    thumbnail:eleventh,
    description:'Landing page'
  }
];


export const ImageGallery = () => {
  return (
    <ImageGall lazyLoad thumbnailPosition="right" useBrowserFullscreen={false} showNav={false} autoPlay={true} onErrorImageURL="Some error ocurred while loading!"  items={images}/>
  )
}
