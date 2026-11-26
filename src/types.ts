export type OrderStatus='Pending'|'Confirmed'|'Preparing'|'Out for Delivery'|'Delivered';
export type Product={id:number;name:string;category:string;description:string;price:number;available:boolean;rating:number;emoji:string;gradient:string;popular?:boolean;offer?:string};
export type CartItem={product:Product;qty:number};
export type Customer={name:string;phone:string;address:string};
export type Order={id:string;customer:Customer;items:CartItem[];subtotal:number;delivery:number;total:number;payment:'Cash on Delivery'|'Simulated Online Payment';status:OrderStatus;createdAt:string};
