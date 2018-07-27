export const ssml = `
<speak>
    <par>
        <media xml:id="text1" begin="0.5s">
        <p>
            <s>1 maal {0} is {1}</s>
            <s>2 maal {0} is {2}</s>
            <s>3 maal {0} is {3}</s>
            <s>4 maal {0} is {4}</s>
            <s>5 maal {0} is {5}</s>
        </p>
        </media>

        <media xml:id="audio1" begin="text1.end-1.0s" fadeOutDur="1.0s">
            <audio src="https://actions.google.com/sounds/v1/human_voices/breathing_echo_space.ogg" clipEnd="2.4s">
            <desc>take a deep breath</desc>
            Breath
            </audio>
        </media>

        <media xml:id="text2" begin="audio1.end+0.5s">
            <p>
                <s>6 maal {0} is {6}</s>
                <s>7 maal {0} is {7}</s>
                <s>8 maal {0} is {8}</s>
                <s>9 maal {0} is {9}</s>
                <s>10 maal {0} is {10}</s>
            </p>
        </media>

    </par>
</speak>
`