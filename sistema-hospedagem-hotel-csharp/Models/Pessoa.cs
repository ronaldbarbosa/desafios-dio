namespace sistema_hospedagem_hotel_csharp.Models 
{
    class Pessoa 
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        public Pessoa(string nome, string sobrenome)
        {
            this.Nome = nome;
            this.Sobrenome = sobrenome;
        }
    }
}