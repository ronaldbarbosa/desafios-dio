using System;
using SistemaEstacionamentoCSharp.Models;

namespace SistemaEstacionamentoCSharp {
    class Program {
        public static void Main(string[] args)
        {
            Console.Clear();

            int numeroVagas = 0;
            decimal valorInicial = 0;
            decimal valorHora = 0;
            bool sair = false;

            Console.WriteLine("============ Iniciando os valores do sistema ============");
            try {
                Console.Write("Número de vagas do estacionamento: ");
                numeroVagas = Convert.ToInt16(Console.ReadLine());
                Console.Write("Valor inicial: ");
                valorInicial = Convert.ToDecimal(Console.ReadLine());
                Console.Write("Valor da hora: ");
                valorHora = Convert.ToDecimal(Console.ReadLine());

                Estacionamento estacionamento = new Estacionamento(numeroVagas, valorHora, valorInicial);
                Console.Clear();

                while(!sair) {
                    bool operacaoRealizada = false;

                    Console.WriteLine("============ Sistema de Estacionamento ============");
                    Console.WriteLine("Selecione a opção:");
                    Console.WriteLine("1 - Adicionar veículo");
                    Console.WriteLine("2 - Remover veículo");
                    Console.WriteLine("3 - Listar todos os veículos");
                    Console.WriteLine("4 - Encerrar a aplicação");

                    Console.Write("Sua opção: ");
                    switch(Console.ReadLine()) {
                        case "1":
                            Console.Clear();
                            Console.WriteLine("============ Adicionando veículo ============");
                            Console.Write("Digite a placa do veículo: ");
                            string placa = Console.ReadLine();
                            Console.Write("Qual o tipo de veículo? Digite 1 (carro) ou 2 (moto): ");
                            string tipo = Console.ReadLine();

                            Veiculo veiculo;

                            if(tipo == "1") {
                                veiculo = new Carro(placa);
                            } else {
                                veiculo = new Moto(placa);
                            }

                            operacaoRealizada = estacionamento.adicionarVeiculo(veiculo);

                            if(operacaoRealizada) {
                                Console.WriteLine("Veículo adicionado com sucesso!\nPressione qualquer tecla para continuar.");
                                Console.ReadKey();
                                Console.Clear();
                            } else {
                                Console.WriteLine("O estacionamento está cheio!\nPressione qualquer tecla para continuar.");
                                Console.ReadKey();
                                Console.Clear();
                            }
                            break;
                        case "2":
                            Console.Clear();
                            Console.WriteLine("============ Removendo veículo ============");
                            Console.Write("Digite a placa do veículo a ser removido: ");
                            placa = Console.ReadLine();
                            
                            operacaoRealizada = estacionamento.removerVeiculo(placa);

                            if(operacaoRealizada) {
                                Console.WriteLine("Veículo removido com sucesso!\nPressione qualquer tecla para continuar.");
                                Console.ReadKey();
                                Console.Clear();
                            } else {
                                Console.WriteLine("O estacionameto está vazio ou veículo não encontrado!\nPressione qualquer tecla para continuar.");
                                Console.ReadKey();
                                Console.Clear();
                            }
                            break;
                        case "3":
                            operacaoRealizada = estacionamento.listarVeiculos();
                            if(!operacaoRealizada) {
                                Console.WriteLine("Ocorreu um erro. Tente novamente.\nPressione qualquer tecla para continuar.");
                                Console.ReadKey();
                                Console.Clear();
                            }
                            break;
                        case "4":
                            sair = true;
                            Console.WriteLine("Encerrando o programa.");
                            break;
                        default:
                            Console.WriteLine("Opção inválida! Tente novamente.");
                            Console.ReadKey();
                            Console.Clear();
                            break;
                    }
                }
            } catch {
                Console.WriteLine("Valor inválido! Encerrando o programa, pressione qualquer tecla...");
                Console.ReadKey();
            }
        }
    }
}