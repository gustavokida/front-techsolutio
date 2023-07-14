export interface Produto {
  id?: string;
  nomeProduto: string;
  fornecedor: string;
  valorProduto: number;
  isEditable?: boolean;
}