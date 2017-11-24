import createStore from "redux-zero";
let work = [
    {
        name:'Chinese Food',
        mode: 'Colaborativo',
        description:'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos platillos de Sushi',
        tecnologies:'React, js, Redux, HTML, CSS, Bootstrap 3',
        img:'img/japaneseFood.png',
        github:'https://github.com/Mariley20/Japanesefood',
        website:'https://jani-123.github.io/Japanesefood/',
            
    },
{
    name: 'Chinese Food',
    mode: 'Colaborativo',
    description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos platillos de Sushi',
    tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
    img: 'img/japaneseFood.png',
    github: 'https://github.com/Mariley20/Japanesefood',
    website: 'https://jani-123.github.io/Japanesefood/'
},
{
    name: 'Chinese Food',
    mode: 'Colaborativo',
    description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos platillos de Sushi',
    tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
    img: 'img/japaneseFood.png',
    github: 'https://github.com/Mariley20/Japanesefood',
    website: 'https://jani-123.github.io/Japanesefood/'
},
{
    name: 'Chinese Food',
    mode: 'Colaborativo',
    description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos platillos de Sushi',
    tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
    img: 'img/japaneseFood.png',
    github: 'https://github.com/Mariley20/Japanesefood',
    website: 'https://jani-123.github.io/Japanesefood/'
},
{
    name: 'Chinese Food',
    mode: 'Colaborativo',
    description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos platillos de Sushi',
    tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
    img: 'img/japaneseFood.png',
    github: 'https://github.com/Mariley20/Japanesefood',
    website: 'https://jani-123.github.io/Japanesefood/'
}
]

let biografy = [];
const initialState = {
    biografy: biografy,
    work: work,
    selected: 0,
};

const store = createStore(initialState);
export default store;