function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 2;
        random_number_g = Math.floor(Math.random() * 255) + 2;
        random_number_b = Math.floor(Math.random() * 255) + 2;

        document.getElementById("result_label").innerHTML = 'I can hear- '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img1 = document.getElementById('alien1')
        img2 = document.getElementById('alien2')
        img3 = document.getElementById('alien3')
        img4 = document.getElementById('alien4')

        if (results[0].label == "Clap") {
            img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.gif';
            img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img4.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        } else if (results[0].label == "Bell") {
            img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.gif';
            img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img4.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        } else if (results[0].label == "Snapping") {
            img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.gif';
            img4.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        } else{
            img1.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img2.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img3.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img4.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.gif';
        }
    }
}