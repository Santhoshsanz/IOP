export class Client{
    id:string;
    name:string;
    logoUrl:string;
    imgType: string;
    address: {
        address1: string,
        address2: string,
        street: string,
        city: string,
        state: string,
        country: string,
        pinCode: number,
        latitude: number,
        longitude: number
    };
}