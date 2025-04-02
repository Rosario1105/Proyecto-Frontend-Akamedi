import { combineReducers } from "redux";

const productsReducer = () => {
    return [
        {   id:'65623' ,
            name:'Vincha Moño - Skincare Makeup Hot pink', 
            category: 'SKINCARE-ROSTRO', 
            price:'5500',
            stock:'1',
            description: 'Vincha Moño - Realizada en microfibra super suave y confortable. Ideal para utilizar a diario para despejar tu rostro en tu rutina de Skincare o Makeup.',
            image_URL:'https://acdn-us.mitiendanube.com/stores/053/053/products/vincha-mono-fucsia1-da06c26f229b32332d16000465704628-1024-1024-photoroom-1-c877107168af5ffa5917073120530436-480-0.webp'
        },
        
            {   id:'65423' ,
                name:'Dots by Skinpurity - Protector Labial balsamo Neutro Sin sabor', 
                category: 'SKINCARE-ROSTRO', 
                price:'5500',
                stock:'1',
                description: 'ncoloro. Novedosa acción 4-en-1: protege, alisa, hidrata y suaviza tus labios. Neutro, sin sabor.Dots es un excelente protector labial con un formato esférico destancado la originalidad. Esta elaborado a base de 4 acciones: PROTEGE (Vitamina E que otorga un cuidado intensivo), ALISA (Aceite de Jojoba, que lubrica y evita el resecamiento), HIDRATA (Manteca de Karité que brinda una hidratación prolongada) y SUAVIZA (Aceite de Argán que deja los labios muy suaves).',
                image_URL:'https://acdn-us.mitiendanube.com/stores/053/053/products/captura-de-pantalla-2022-07-28-a-las-11-28-07-p-m1-9b7e6464fc80aaa31e16590619743945-480-0.webp'},
            
    ]

}
const selectedProductReducer = (selectedProduct = null, action) => {
    if(action.type === 'PRODUCT_SELECTED'){
        return action.payload;
    }

    return selectedProduct;
};

export default combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer
})

