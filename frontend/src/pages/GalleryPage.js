import React from "react";

import ImageGallery from 'react-image-gallery';

const pictures = [

    {
        original: 'images/lake-bikepacking.jpg',
        thumbnail: 'images/lake-bikepacking.jpg',
        description: "I like to ride bikes sometimes too",
        originalHeight: "450px",
    },
    {
        original: 'images/sahale-mountaineering.jpg',
        thumbnail: 'images/sahale-mountaineering.jpg',
        description: "Lower altitude camping is nice for a change (Sahale Peak)",
        originalHeight: "450px",
    },
    {
        original: 'images/tent-life.jpg',
        thumbnail: 'images/tent-life.jpg',
        description: "Especially snow camping on Mount Baker",
        originalHeight: "450px",
    },
    {
        original: 'images/the-gorge-festival.jpg',
        thumbnail: 'images/the-gorge-festival.jpg',
        description: "And I can camp and dance at The Gorge",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-festival.jpg',
        thumbnail: 'images/thomas-festival.jpg',
        description: "That's a Chunky!",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-great-pyramids.jpg',
        thumbnail: 'images/thomas-great-pyramids.jpg',
        description: "This is me in front of pyramids in Giza",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-lake-perfection.jpg',
        thumbnail: 'images/thomas-lake-perfection.jpg',
        description: "Don't forgfet about the Enchantments!",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-pyramids.jpg',
        thumbnail: 'images/thomas-pyramids.jpg',
        description: "This is me in front of pyramids in Teotihuacan",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-rich-rainier.jpg',
        thumbnail: 'images/thomas-rich-rainier.jpg',
        description: "Climbing mountains (Rainier) is fun too",
        originalHeight: "450px",
    },
    {
        original: 'images/thomas-thesis.jpg',
        thumbnail: 'images/thomas-thesis.jpg',
        description: "I also can clean up and write a thesis!",
        originalHeight: "450px",
    },
]

function GalleryPage(){
    return(
        <>
        <h2>My Awesome Gallery</h2>
        
        <article className="gallery">
            <ImageGallery items={pictures} />
        </article>

        </>
    );

}

export default GalleryPage;