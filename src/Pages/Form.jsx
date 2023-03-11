import image from '../assets/image.png'
import memeData from './memeData';
import React from 'react';


export default function Form() {
    const [meme, setMeme] = React.useState({
        inputOne: '',
        inputTwo: '',
        url: 'http://i.imgflip.com/1bij.jpg'
    })

    const [memeImage, SetMemeImage] = React.useState(memeData);

    function randomMemeImages() {
        const memeImageArray = memeImage.data.memes;
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

    function handleClick(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main >
            <form action="#" className="form">
                <div className="inputs">

                    <input type="text"
                        name="inputOne"
                        className="inputOne"
                        placeholder="Type Here Part One"
                        value={meme.inputOne}
                        onChange={handleClick}
                    />

                    <input type="text"
                        name="inputTwo"
                        className="inputTwo"
                        placeholder="Type Here Part Two"
                        value={meme.inputTwo}
                        onChange={handleClick}

                    />
                </div>
                <button onClick={handleGetMeme} className="submitBtn">Get a meme image <img src={image} alt="image" /></button>
            </form>

            <div className='displayMemeImage'>
                <img src={meme.url} alt="Getting Meme's" />
                <h2 className="meme--text top">{meme.inputOne}</h2>
                <h2 className="meme--text bottom">{meme.inputTwo}</h2>
            </div>
        </main>
    )
}


