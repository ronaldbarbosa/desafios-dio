namespace SistemaEstacionamentoCSharp.Models {
    public class Moto : Veiculo {
        public Moto(string placa) {
            this.placa = placa;
            this.tipoVeiculo = TipoVeiculo.Moto;
        }
    }
}