namespace SistemaEstacionamentoCSharp.Models;

public abstract class Veiculo {
    public string placa { get; set; }
    public TipoVeiculo tipoVeiculo { get; set; }    
}