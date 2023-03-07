import image from '../assets/image.png'
import memeData from './memeData';
import React from 'react';

export default function Form() {
    const [meme, setMeme] = React.useState('')

    function RandomImage() {
        const memeImageArray = memeData.data.memes;
        const randomMemeImage = memeImageArray[Math.floor(Math.random() * memeImageArray.length)].url
        return (randomMemeImage);
    }


    function handleGetMeme(e) {
        console.log('Clicked')
        e.preventDefault();
        setMeme(RandomImage)
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
                <img src={meme} alt="Getting Meme's" />
            </div>
        </main>
    )
}


// const date = new Date();
// date.getHours();
// function greeting(name) {
//     const date = new Date().getHours();
//     let dayTiming;
//     if (date >= 4 && date < 12) {
//         dayTiming = 'Good Morning';
//         console.log(`${dayTiming}, ${name},${date}`)
//     }
//     else if (date >= 12 && date < 17) {
//         dayTiming = 'Good Afternoon';
//         console.log(`Good ${dayTiming}, ${name},${date}`)
//     }
//     else if (date >= 17 && date < 20) {
//         dayTiming = 'Good Evening';
//         console.log(`Good ${dayTiming}, ${name},${date}`)
//     }
//     else if (date >= 20 && date < 4) {
//         dayTiming = 'Good Night';
//         console.log(`Good ${dayTiming}, ${name},${date}`)
//     }
// }

// greeting("Bob")