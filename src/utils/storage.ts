export const load=<T,>(key:string,fallback:T):T=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}};
export const save=<T,>(key:string,value:T)=>localStorage.setItem(key,JSON.stringify(value));
export const money=(n:number)=>`₹${n.toLocaleString('en-IN')}`;
export const makeOrderId=()=>`QB-${Date.now().toString(36).toUpperCase().slice(-6)}${Math.random().toString(36).slice(2,4).toUpperCase()}`;
