namespace SistemaEstacionamentoCSharp.Models {
    public class Estacionamento {
        public int numeroVagas { get; }
        public decimal valorHora { get; }
        public decimal valorInicial { get; }

        public List<Veiculo> veiculosEstacionados { get; }

        public Estacionamento(int numeroVagas, decimal valorHora, decimal valorInicial) {
            this.numeroVagas = numeroVagas;
            this.valorHora = valorHora;
            this.valorInicial = valorInicial;
            this.veiculosEstacionados = new List<Veiculo>();
        }

        public bool adicionarVeiculo(Veiculo veiculo) {
            if(veiculosEstacionados.Count() >= this.numeroVagas) return false;
            this.veiculosEstacionados.Add(veiculo);
            return true;
        }

        public bool removerVeiculo(string placa) {
            if(this.veiculosEstacionados.Count() == 0) return false;


            for(int i = 0; i < this.veiculosEstacionados.Count(); i++) {
                if(this.veiculosEstacionados[i].placa == placa) {
                    Console.Write("Quantidade de horas que o veículo permaneceu estacionado: ");
                    decimal quantidadeHoras = Convert.ToDecimal(Console.ReadLine());
                    if(this.veiculosEstacionados[i].tipoVeiculo == TipoVeiculo.Carro) {
                        Console.WriteLine($"Valor total a ser pago: { this.valorInicial + (this.valorHora * quantidadeHoras) }");
                        Console.ReadKey();
                    } else {
                        Console.WriteLine($"Valor total a ser pago: { this.valorInicial + ((this.valorHora * quantidadeHoras) / 2) }");
                        Console.ReadKey();
                    }
                    this.veiculosEstacionados.RemoveAt(i);
                    break;
                }
            }

            return true;
        }

        public bool listarVeiculos() {
            Console.Clear();
            Console.WriteLine("============ Lista de veículos estacionados ============");
            Console.WriteLine("Placa\t\tTipo");
            this.veiculosEstacionados.ForEach(delegate(Veiculo veiculo)
            {
                Console.WriteLine(veiculo.placa + "\t" + veiculo.tipoVeiculo);
            });
            Console.WriteLine("\nPressione qualquer tecla para retornar ao menu.");
            Console.ReadKey();
            Console.Clear();
            return true;
        }
    }
}