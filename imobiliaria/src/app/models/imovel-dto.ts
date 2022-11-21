import { tipoImovel } from "../shared/enums/tipoImove-enum";

export interface CriarImovelDto{
    tipoImoveis: tipoImovel;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    cep: string;
    complemento?: string;
    valorNegociado: number;
    criacao: Date;
    corretorAnunciadoId: string;
}

export interface ImovelDto extends CriarImovelDto{
    id: string;
    venda?: Date;
    reservado: boolean;
}
