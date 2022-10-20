import { tipoImovel } from "../shared/enums/tipoImove-enum";

export interface CriarImovelDto{
    tipoImoveis: tipoImovel;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    cep: string;
    complemento: string;
    valorBase: number;
    criacao: Date;
    corretorAnunciadoId: string;
}
