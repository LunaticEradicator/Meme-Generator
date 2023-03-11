import image from '../assets/image.png'
import React from 'react';
// import memeData from './memeData'; //


export default function Form() {
    const [meme, setMeme] = React.useState({
        inputOne: '',
        inputTwo: '',
        url: 'http://i.imgflip.com/1bij.jpg'
    })

    // const [memeImage, SetMemeImage] = React.useState(memeData); 
    const [memeImage, SetMemeImage] = React.useState([]); // instead we are fetching using an API

    React.useEffect(() => { // api calling
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => SetMemeImage(data.data.memes));
    })

    function randomMemeImagesURL() { // to get an random url from the API
        const randomNumber = Math.floor(Math.random() * memeImage.length)
        const randomMemeImage = memeImage[randomNumber].url //memeImage is an array => memeImage[3].url
        return randomMemeImage
    }


    function handleGetMeme(e) {
        console.log('Clicked')
        e.preventDefault();
        setMeme(prevMeme => { //changes the image when clicked using setState
            return (
                {
                    ...prevMeme,
                    url: randomMemeImagesURL()
                }
            )
        })
    }

    function handleUserInput(event) {
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
                        onChange={handleUserInput}
                    />

                    <input type="text"
                        name="inputTwo"
                        className="inputTwo"
                        placeholder="Type Here Part Two"
                        value={meme.inputTwo}
                        onChange={handleUserInput}

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


