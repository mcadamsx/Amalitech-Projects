
const textContent = document.querySelectorAll('#text-content');

for (let index = 0; index < textContent.length; index++) {
    const element = textContent[index];
    let header = element.querySelector('header');
    header.addEventListener('click', ()=>{
        element.classList.toggle('open');

        var description = element.querySelector ('#description');

    
        if(element.classList.contains('open')){
            element.querySelector('img').style.rotate = '180deg';
            element.querySelector('span').style.fontWeight = 'bold';
            description.style.height = `${description.scrollHeight}px`; 

        }else{
            description.style.height = '0px';
            element.querySelector('img').style.rotate = '0deg'
            element.querySelector('span').style.fontWeight = '300';
        }
    })
} 