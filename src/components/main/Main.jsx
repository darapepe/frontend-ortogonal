import { useState, useEffect } from "react";

const Content = (props) => {
    const [tweets, setTweets] = useState({});
    const newTweet = (contenta1, contenta2, contentb1, contentb2) => {
        const url = "https://app-ortogonal.herokuapp.com/";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "a1": contenta1,
                "a2": contenta2,
                "b1": contentb1,
                "b2": contentb2
            }
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                const tweets = result;
                setTweets(tweets);
                console.log(`Respuesta:  ${result}`);
            }
            )
            .catch(error => {
                console.log("error while creating the tweet");
            });
    }

    return <section>
        <h2>Determinar si dos vectores son ortogonales</h2>
        <NewTweet newTweet={newTweet} />
        <Feed tweets={tweets} />
    </section>
};

const NewTweet = (props) => {
    const [contenta1, setContenta1] = useState("");
    const [contenta2, setContenta2] = useState("");
    const [contentb1, setContentb1] = useState("");
    const [contentb2, setContentb2] = useState("");
    const { newTweet } = props;

    return <>
        <form>
            <p className="paragraphSmall"><b>Vector a1: </b><input value={contenta1} onChange={(event) => setContenta1(event.target.value)} /></p>
            <p className="paragraphSmall"><b>Vector a2: </b><input className="input" value={contenta2} onChange={(event) => setContenta2(event.target.value)} /></p>
            <p className="paragraphSmall"><b>Vector b1: </b><input className="input" value={contentb1} onChange={(event) => setContentb1(event.target.value)} /></p>
            <p className="paragraphSmall"><b>Vector b2: </b><input className="input" value={contentb2} onChange={(event) => setContentb2(event.target.value)} /></p>
            <p className="paragraphSmall"><button className="button buttonPrimary buttonSmall" type="button" onClick={() => newTweet(contenta1, contenta2, contentb1, contentb2)}>Consultar</button></p>
        </form>
    </>
};

const Feed = (props) => {
    const { tweets } = props;

    return <section>
        <p><strong>{`${JSON.stringify(tweets.resultado)}`}</strong></p>        
    </section>
};

export default Content;