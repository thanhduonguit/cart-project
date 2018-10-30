var initialState = [
    {
        id : 1,
        name : 'Iphone XS Max',
        image :'https://i2.cdscdn.com/pdt2/6/o/r/1/700x700/iphonexs256or/rw/apple-iphone-xs-or-256-go.jpg',
        description : 'do apple san xuat',
        price : '1200' ,
        inventory : 10,      //hàng tồn kho
        rating : 5
    },
    {
        id : 2,
        name : 'Iphone X',
        image :'https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg',
        description : 'do apple lam',
        price : '1000',
        inventory : 12,
        rating : 4     
    },
    {
        id : 3,
        name : 'Samsung Galaxy Note 8',
        image :'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-note-8-dual-sim-azul-n950f-8806088957517.jpg',
        description : 'do Samsung san xuat',
        price : '900',
        inventory : 9,
        rating : 3     
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;