import { CriaCorretorDto } from "./corretor-dto";

export interface CriaClienteDto extends CriaCorretorDto{
    cpf: string;
}