namespace sistema_hospedagem_hotel_csharp.Models 
{
    class Reserva
    {
        public List<Pessoa> Hospedes { get; set; }
        public Suite Suite { get; set; }
        public int DiasReservados { get; set; }

        public Reserva(int diasReservados)
        {
            this.DiasReservados = diasReservados;
        }

        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            if(hospedes.Count > this.Suite.Capacidade) 
            {
                throw new Exception("A quantidade de hóspedes não pode exceder a capacidade da suíte.");
            } 
            else 
            {
                this.Hospedes = hospedes;
            }
        }

        public void CadastrarSuite(Suite suite)
        {
            this.Suite = suite;
        }

        public int ObterQuantidadeHospedes()
        {
            return Hospedes.Count;
        }

        public decimal CalcularValorDiaria()
        {
            if(this.DiasReservados >= 10) {
                decimal desconto = this.Suite.ValorDiaria * this.DiasReservados * 0.10M;
                return this.Suite.ValorDiaria * this.DiasReservados - desconto;
            } else {
                return this.Suite.ValorDiaria * this.DiasReservados;
            }
        }
    }
}