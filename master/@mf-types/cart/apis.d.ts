
    export type RemoteKeys = 'cart/cart' | 'cart/Login' | 'cart/MiniCart';
    type PackageType<T> = T extends 'cart/MiniCart' ? typeof import('cart/MiniCart') :T extends 'cart/Login' ? typeof import('cart/Login') :T extends 'cart/cart' ? typeof import('cart/cart') :any;