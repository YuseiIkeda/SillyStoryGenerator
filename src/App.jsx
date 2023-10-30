import { useState } from "react";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
    const [showStory, setShowStory] = useState(false);
    const [story, setStory] = useState("");
    const [ukus, setUkus] = useState("us");

    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = ["spontaneously combusted",
        "melted into a puddle on the sidewalk",
        "turned into a slug and crawled away"];

    function generateRandomStory() {
        const xItem = randomValueFromArray(xItems);
        const yItem = randomValueFromArray(yItems);
        const zItem = randomValueFromArray(zItems);

        let customName = "Bob";
        if (document.getElementById("nameText").value != "") {
            customName = document.getElementById("nameText").value;
        }

        let temperature = 94;
        let weight = 300;
        if (ukus === "uk") {
            temperature = Math.round((temperature - 32) * (5 / 9));
            weight = Math.round(weight * 0.071429);
        }

        const story = `It was ${temperature} ${ukus === "us" ? "fahrenheit" : "centigrade"} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customName} saw the whole thing, but was not surprised — ${xItem} weighs ${weight} ${ukus === "us" ? "pounds" : "stone"}, and it was a hot day.`;

        setShowStory(true);
        setStory(story);
    }

    function radioFunc(country) {
        setUkus(country);
    }

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input type="text" placeholder="" id="nameText" />

            </div>
            <div>
                <label htmlFor="us">US</label>
                <input type="radio" value="us" checked={ukus === "us"} onChange={() => radioFunc("us")} />
                <label htmlFor="uk">UK</label>
                <input type="radio" value="uk" checked={ukus === "uk"} onChange={() => radioFunc("uk")} />
            </div>
            <div>
                <button onClick={generateRandomStory}>Generate random story</button>
            </div>
            {showStory && (<p>{story}</p>)}
        </>
    );
}