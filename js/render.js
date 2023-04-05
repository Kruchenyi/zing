


// *   ABOUT US


{
    const data =[
        [
            {
                id: 1,
                title: 'Mission',
                text: 'It makes people at ease and feel like they want to open up.',
            },
            {
                id: 2,
                title: 'Motivation',
                text: 'The perfect mix of art that complements the room\'s style.',
            },
        ],
        [
            {
                id: 3,
                title: 'Vision',
                text: 'Along with a healthy dose of negative space to give the eyes spots to rest.',
            },
            {
                id: 4,
                title: 'Goal',
                text: 'Art that has meaning to the people who live in the space.',
            },
        ]
    ]

    document.querySelector('.about__card__row--1').innerHTML = data[0].map(item => `
                    <div class="about__card flex-column wow animate__fadeIn" data-wow-delay="${item.id / 2}s">
                    <span class="card__number">
                    ${item.id}
                    </span>
                    <h3 class="card__title">
                    ${item.title}
                    </h3>
                    <p class="card__text">
                    ${item.text} 
                    </p>
                </div>
    `).join('')
    document.querySelector('.about__card__row--2').innerHTML = data[1].map(item => `
                    <div class="about__card flex-column wow animate__fadeIn" data-wow-delay="${item.id / 2}s">
                    <span class="card__number">
                    ${item.id}
                    </span>
                    <h3 class="card__title">
                    ${item.title}
                    </h3>
                    <p class="card__text">
                    ${item.text} 
                    </p>
                </div>
    `).join('')

}

{
    const data = [
        [
            './images/about/img-1.png', './images/about/img-2.png',
        ],
        [
            './images/about/img-3.png', './images/about/img-4.png'
        ],
    ]

    document.querySelector('.about__image__column--1').innerHTML = data[0].map((item, index) =>`
         <div class="about__image__wrapper__${index + 1}">
            <img src=${item} alt="img">
        </div>
    `).join('')
    document.querySelector('.about__image__column--2').innerHTML = data[1].map((item, index) =>`
         <div class="about__image__wrapper__${index + 1}">
            <img src=${item} alt="img">
        </div>
    `).join('')
}


// *  PRODUCTS

{
    const data = [
        {
            title: 'Stool',
            price: 200,
        },
        {
            title: 'Tea table',
            price: 150,
        },
        {
            title: 'Sofa - Light',
            price: 300,
        },
        {
            title: 'Sofa - Dark',
            price: 300,
        },
        {
            title: 'Table Lamp',
            price: 50,
        },
        {
            title: 'Chair',
            price: 200,
        },
        {
            title: 'Bedside table',
            price: 100,
        },
        {
            title: 'Light chair',
            price: 80,
        },
    ]

    document.querySelector('.products__cards__wrapper .products__row').innerHTML = data.map((item, index)  => `
                <div class="products__card flex-column wow animate__zoomIn" data-wow-delay="${index / 6}s">
                <div class="products__card__img__wrapper">
                <img src="./images/products/img-${index + 1}.png" alt="card-image">
                </div>
                
                <div class="products__card__info flex-column">
                <h3 class="products__card__title">
                    ${item.title}
                </h3>
                <div class="products__card__info__row flex-row">
                    <p class="products__card__price">
                    $${item.price}
                    </p>
                    <button class="products__cart__btn">
                    <img src="./images/products/arrow-right.png" alt="arrow">
                    </button>
                </div>
                </div>
                <div class="products__card__background"></div>
            </div>
    `).join('')
}