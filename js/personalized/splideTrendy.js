document.querySelectorAll('.splide').forEach(carousel => new Splide( carousel, {
    type: 'loop',
    perPage: 2,
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
}).mount());