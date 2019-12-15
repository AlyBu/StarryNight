window.onload = function () {

    //stars
    var maxStars = 500;
    var stars = [];
    var speedStar = 1;

    //returns a random number between min and max
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //creates a vector of stars
    function showStars(maxStars) {

        //original star
        let elemStar = document.getElementById('star');
        stars.push(elemStar);

        //create stars
        for (let i = 0; i < maxStars; i++) {
            let newStar = document.createElement('div');
            newStar = elemStar.cloneNode(true);
            let sizeStar = random(1, 4);
            newStar.style.height = sizeStar + 'px';
            newStar.style.width = sizeStar + 'px';
            newStar.style.opacity = random(0.5, 1).toString();
            newStar.style.top = random(0, window.innerHeight) + 'px';
            newStar.style.left = random(0, window.innerWidth) + 'px';
            stars.push(newStar);
            elemStar.parentNode.appendChild(newStar);
        }
    }

    showStars(maxStars);

    //changes the opacity of a random star
    function changeOpacity() {
        let theChosenOne = random(0, stars.length - 1);
        stars[theChosenOne].style.opacity = random(0.5, 1).toString();
        // let t = setTimeout(changeOpacity, 5000);
    }

    var changeOpacityInterval = setInterval(changeOpacity, speedStar);

}