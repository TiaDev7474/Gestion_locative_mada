interface InformationType{
         email:string,
         fname:string,
         lname:string,
         password:string
}
interface PropertyCardType{
    status: boolean,
    image: string,
    rent: number,
    address: string,
}
export type {PropertyCardType}
export type {InformationType}
