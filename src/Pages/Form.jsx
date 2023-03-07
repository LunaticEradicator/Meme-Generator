import image from '../assets/image.png'
import memeData from './memeData';
import React from 'react';

/**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   * 
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   * 
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   * 
   * Lastly, update the `getMemeImage` function and the markup 
   * to reflect our newly reformed state object and array in the
   * correct way.
   */


export default function Form() {
    // const [meme, setMeme] = React.useState('http://i.imgflip.com/1bij.jpg')

    const [meme, setMeme] = React.useState({
        firstText: '',
        secondText: '',
        url: 'http://i.imgflip.com/1bij.jpg'
    })

    const [memeImage, SetMemeImage] = React.useState(memeData);

    function randomMemeImages() {
        const memeImageArray = memeImage.data.memes;
        // const memeImageArray = memeData.data.memes;
        const randomMemeImage = memeImageArray[Math.floor(Math.random() * memeImageArray.length)].url
        console.log(randomMemeImage)
        return randomMemeImage
    }

    function generateMeme() {
        setMeme(prevMeme => {
            return (
                {
                    ...prevMeme,
                    url: randomMemeImages()
                }
            )
        })
    }

    function handleGetMeme(e) {
        console.log('Clicked')
        e.preventDefault();
        generateMeme()

    }

    return (
        <main >
            <p></p>
            <form action="#" className="form">
                <div className="inputs">
                    <input type="text" name="inputOne" className="inputOne" placeholder='Type Here Part One' />
                    <input type="text" name="inputTwo" className="inputTwo" placeholder='Type Here Part Two' />
                </div>
                <button onClick={handleGetMeme} className="submitBtn">Get a meme image <img src={image} alt="image" /></button>
            </form>

            <div className='displayMemeImage'>
                <img src={meme.url} alt="Getting Meme's" />
            </div>
        </main>
    )
}


