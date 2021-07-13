import CategoryModel from '../models/category-model';
import MakitModel from '../models/makit-model';
import ProductModel from '../models/product-model';

export const CATEGORIES = [
    new CategoryModel('c1','Bento', require('../assets/bento.png')),
    new CategoryModel('c2','Breakfast', require('../assets/breakfast.png')),
    new CategoryModel('c3','Drinks', require('../assets/coconut.png')),
    new CategoryModel('c4','Fruits', require('../assets/sweets.png')),
    new CategoryModel('c5','Protein', require('../assets/thanksgiving.png')),
    new CategoryModel('c6','Snacks', require('../assets/sweetpotato.png')),
    new CategoryModel('c7','Starch', require('../assets/spinach.png')),
    new CategoryModel('c8','Veggies', require('../assets/bananas.png')),
];

export const MAKITS = [
    new MakitModel('a1','Makit #1','Ngermetengel', require('../assets/R1.png')),
    new MakitModel('a2','Makit #2','Imeong', require('../assets/R2.png')),
    new MakitModel('a3','Makit #3','Dngeronger', require('../assets/R3.png')),
    new MakitModel('a4','Makit #4','Medalaii', require('../assets/R4.png')),
    new MakitModel('a5','Makit #5','Karmeliang','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Frestaurant%2Bfront&psig=AOvVaw1daKQFyOahRuSILdE326M-&ust=1626225580894000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiK7sTw3vECFQAAAAAdAAAAABAD'),
    new MakitModel('a6','Makit #6','Ngermasech', 'https://images.app.goo.gl/sWAPjZdZRtjJ7b3Z9'),
    new MakitModel('a7','Makit #7','Ngerutoi', 'https://media.gettyimages.com/photos/coffee-shop-in-downtown-granada-andalusia-spain-picture-id1132837270?s=612x612'),
    new MakitModel('a8','Makit #8','Ordomel', 'https://www.shutterstock.com/image-photo/new-york-city-may-8-2015-316561052'),
    new MakitModel('a9','Makit #9','Kloulklubed', require('../assets/R1.png')),
    new MakitModel('a10','Makit #10','Ngermechau', require('../assets/R2.png'))
];

export const PRODUCTS = [
    new ProductModel('e1','c1','Bento','Brenda','123-456-7890','775-2011',require('../assets/bento.png'),'$5','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e2','c2', 'Breakfast','Brenda','123-456-7890','775-2011',require('../assets/breakfast.png'),'$3','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e3','c3','Drinks', 'Brenda','123-456-7890','775-2011',require('../assets/coconut.png'),'$1','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e4','c4','Fruits', 'Brenda','123-456-7890','775-2011',require('../assets/bananas.png'),'$2','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e5','c5','Protein', 'Brenda','123-456-7890','775-2011',require('../assets/thanksgiving.png'),'$5','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e6','c6','Snacks', 'Brenda','123-456-7890','775-2011',require('../assets/sweets.png'),'$3','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e7','c7','Starch', 'Brenda','123-456-7890','775-2011',require('../assets/sweetpotato.png'),'$4','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e8','c8','Veggies', 'Brenda','123-456-7890','775-2011',require('../assets/spinach.png'),'$3','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e9','c1','Bento1', 'Joe','000-456-7890','775-9999',require('../assets/bento.png'),'$5','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e10','c2','Breakfast1', 'Joe','000-456-7890','775-9999',require('../assets/breakfast.png'),'$3','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e11','c3','Drinks1', 'Joe','000-456-7890','775-9999',require('../assets/coconut.png'),'$1','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e12','c4','Fruits1', 'Joe','000-456-7890','775-9999',require('../assets/bananas.png'),'$2','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e13','c5','Protein1', 'Joe','000-456-7890','775-9999',require('../assets/thanksgiving.png'),'$5','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e14','c6','Snacks1', 'Joe','000-456-7890','775-9999',require('../assets/sweets.png'),'$3','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e15','c7','Starch1', 'Joe','000-456-7890','775-9999',require('../assets/sweetpotato.png'),'$4','06/15/2021 5AM',true,'Yummy'),
    new ProductModel('e16','c8','Veggies1', 'Joe','000-456-7890','775-9999',require('../assets/spinach.png'),'$3','06/15/2021 5AM',true,'Yummy')
];