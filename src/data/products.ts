import type { Product,Order } from '../types';
export const categories=['All','Burgers','Pizza','Indian','Bowls','Drinks','Desserts'];
export const products:Product[]=[
{id:1,name:'Smoky Paneer Burger',category:'Burgers',description:'Grilled paneer, crunchy lettuce, onion and smoky house sauce.',price:189,available:true,rating:4.8,emoji:'🍔',gradient:'linear-gradient(135deg,#ffedd5,#fb923c)',popular:true,offer:'Bestseller'},
{id:2,name:'Classic Veg Burger',category:'Burgers',description:'Crispy vegetable patty, cheese, tomato and signature sauce.',price:149,available:true,rating:4.5,emoji:'🍔',gradient:'linear-gradient(135deg,#fef3c7,#f59e0b)'},
{id:3,name:'Farmhouse Pizza',category:'Pizza',description:'Bell peppers, onion, mushroom, tomato and mozzarella.',price:329,available:true,rating:4.7,emoji:'🍕',gradient:'linear-gradient(135deg,#fee2e2,#ef4444)',popular:true,offer:'20% combo deal'},
{id:4,name:'Margherita Pizza',category:'Pizza',description:'Tomato basil sauce with a generous layer of mozzarella.',price:249,available:true,rating:4.4,emoji:'🍕',gradient:'linear-gradient(135deg,#fef9c3,#eab308)'},
{id:5,name:'Paneer Tikka Bowl',category:'Bowls',description:'Tandoori paneer, jeera rice, salad and mint chutney.',price:239,available:true,rating:4.9,emoji:'🥗',gradient:'linear-gradient(135deg,#dcfce7,#22c55e)',popular:true},
{id:6,name:'Rajma Rice Bowl',category:'Bowls',description:'Slow-cooked rajma with steamed basmati rice and salad.',price:179,available:true,rating:4.6,emoji:'🍛',gradient:'linear-gradient(135deg,#fce7f3,#ec4899)'},
{id:7,name:'Butter Paneer Meal',category:'Indian',description:'Creamy butter paneer, two rotis, rice and onion salad.',price:289,available:true,rating:4.8,emoji:'🍲',gradient:'linear-gradient(135deg,#ffedd5,#ea580c)',popular:true},
{id:8,name:'Chole Kulche',category:'Indian',description:'Spiced chickpeas served with soft toasted kulche.',price:169,available:true,rating:4.5,emoji:'🥘',gradient:'linear-gradient(135deg,#fef3c7,#d97706)'},
{id:9,name:'Masala Lemonade',category:'Drinks',description:'Fresh lemon, mint, roasted cumin and chilled soda.',price:79,available:true,rating:4.3,emoji:'🥤',gradient:'linear-gradient(135deg,#ecfccb,#84cc16)'},
{id:10,name:'Cold Coffee',category:'Drinks',description:'Creamy chilled coffee topped with cocoa.',price:119,available:true,rating:4.7,emoji:'☕',gradient:'linear-gradient(135deg,#f5f5f4,#a8a29e)'},
{id:11,name:'Choco Lava Cake',category:'Desserts',description:'Warm chocolate cake with a rich molten centre.',price:129,available:true,rating:4.9,emoji:'🍫',gradient:'linear-gradient(135deg,#f3e8ff,#a855f7)',popular:true},
{id:12,name:'Gulab Jamun Duo',category:'Desserts',description:'Two warm gulab jamuns in aromatic saffron syrup.',price:99,available:false,rating:4.6,emoji:'🍮',gradient:'linear-gradient(135deg,#ffe4e6,#f43f5e)'}];
export const demoOrders:Order[]=[{id:'QB-DEMO41',customer:{name:'Demo Customer',phone:'9876543210',address:'University Campus, Demo City'},items:[{product:products[4],qty:1},{product:products[8],qty:2}],subtotal:397,delivery:29,total:426,payment:'Cash on Delivery',status:'Preparing',createdAt:new Date(Date.now()-86400000).toISOString()}];
