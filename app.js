const heading = 'Lets Meet Your Team';

let i = 0;

console.log(heading.length);

const typing =() => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();