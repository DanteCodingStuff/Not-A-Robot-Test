const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;
// selectColor = document.querySelector('#SelectColor');

const elements = document.querySelectorAll('.element');
const selectColor = document.getElementById('SelectColor');

// Assign Color Elements
elements.forEach(function (element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

// Generate Random Color Function
function getRandomColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Check If Color Is Correct

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            alert('You Are Quite a Human');
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
        }else{
            alert('Please Verificate That You Are Human First');
            location.reload(true);
        }

    });
});