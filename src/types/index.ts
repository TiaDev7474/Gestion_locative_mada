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
interface UserListInModalType{
    profil: string,
    fname:string,
    lname:string,
}

export type {UserListInModalType}
export type {PropertyCardType}
export type {InformationType}
