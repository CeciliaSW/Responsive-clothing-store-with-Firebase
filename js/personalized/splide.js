var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 5,
    rewind: true,
    breakpoints: {
        540: {
            perPage: 2,
            gap: '.7rem',
        },
        380: {
            perPage: 1,
            gap: '.7rem',
        },
    },
});
splide.mount();