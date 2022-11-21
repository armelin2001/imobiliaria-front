export interface LoginDto{
    email: string;
    senha: string;
}
export interface LoginRetornoDto{
    id: string;
    email: string;
    ehCorretor: boolean;
}