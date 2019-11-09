$('header').prepend("<svg id='menuIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><line class='iconMenuLine' id='lineTop' x1='7' y1='12' x2='24' y2='12' stroke-width='0.5' stroke='black'></line><line class='iconMenuLine' id='lineBottom' x1='7' y1='18' x2='24' y2='18' stroke-width='0.5' stroke='black'></line></svg>");

function toggleMenu() {
    document.getElementById("lineTop").classList.toggle("lineTopRotate");
    document.getElementById("lineBottom").classList.toggle("lineBottomRotate");
}

$('body').on('click','#menuIcon', toggleMenu);