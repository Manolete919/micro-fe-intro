import { BehaviorSubject } from "rxjs";
import { CartItems } from "./product";
export declare const jwt: BehaviorSubject<null>;
export declare const cart: BehaviorSubject<CartItems | null>;
export declare const getCart: () => Promise<CartItems>;
export declare const addToCart: (id: string) => Promise<void>;
export declare const clearCart: () => Promise<void>;
export declare const login: (username: string, password: string) => Promise<any>;
export declare function useLoggedIn(): boolean;
