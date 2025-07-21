export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    contact: string;
    secondary_contact?: string;
    address?: Address;
}

export interface Address{
    city : string;
    state : string;
    zipcode : string;
}

export interface Admin extends User {
    role: "Admin" | "Super Admin" | "Editor";
}

export interface ProductDictionary {
    [key: string]: string;
}