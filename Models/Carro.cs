namespace SistemaEstacionamentoCSharp.Models {
     public class Carro : Veiculo {
        public Carro(string placa) {
            this.placa = placa;
            this.tipoVeiculo = TipoVeiculo.Carro;
        }
    } 
}