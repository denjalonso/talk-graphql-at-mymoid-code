export type Template = {
    _id: string;
    headerPrimary: string;
    backgroundColor: string;
    buttonColor: string;
    buttonTextColor: string;
    hasHeader: boolean;
    hasConcept: boolean;
    hasReference: boolean;
    commerce: Commerce;
}

export type Commerce = {
    "_id" : string;
    "allowForProduction" : boolean;
    "companyName" : string;
    "companyPerson" : string;
    "user" : User;
    "accionistas" : string[];
    "merchantCategories" : string[];
    "public_id" : string;
    "fiscalAddress" : Address;
}

export type User = {
    "_id" : string;
    "role" : string;
    "bloqued_tries" : number;
    "bloqued_date" : string;
    "is_complete" : number;
    "is_bloqued" : boolean;
    "salt" : string;
    "email" : string;
    "password" : string;
    "address" : Address;
}

export type Address = {
    address1: string;
    city: string;
    country: string;
    postalCode: number;
    state: string;
}