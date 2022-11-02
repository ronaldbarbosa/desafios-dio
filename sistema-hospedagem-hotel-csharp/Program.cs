using sistema_hospedagem_hotel_csharp.Models;

List<Pessoa> hospedes = new List<Pessoa>();

Pessoa p1 = new Pessoa("Ronald", "Barbosa");
Pessoa p2 = new Pessoa("Maria", "Rodrigues");

hospedes.Add(p1);
hospedes.Add(p2);

Suite suite = new Suite("Premium", 3, 30);

Reserva reserva = new Reserva(10);
reserva.CadastrarSuite(suite);
reserva.CadastrarHospedes(hospedes);

System.Console.WriteLine($"Hóspedes: {reserva.ObterQuantidadeHospedes()}");
System.Console.WriteLine($"Valor diária: {reserva.CalcularValorDiaria()}");