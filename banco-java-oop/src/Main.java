import Account.Account;
import Account.CheckingAccount;
import Account.SavingsAccount;
import Client.Client;

public class Main {
    public static void main(String[] args) {
        // Criando o banco
        Bank bank = new Bank("Teste");

        // Cadastrando o clientes
        Client client1 = new Client("Ronald", 1234678910, "meucontato@email.com");
        Client client2 = new Client("Amelia", 987654321, "meucontato@email.com.br");

        // Criando as novas contas e adicionando à lista de contas do banco
        Account client1Account = new CheckingAccount(client1);
        Account client2Account = new SavingsAccount(client2);
        bank.AddAccountToBankList(client1Account);
        bank.AddAccountToBankList(client2Account);

        // Resultados
        client1Account.showExtract();
        client2Account.showExtract();

        // Algumas operações
        client1Account.deposit(500);
        client1Account.transfer(150, client2Account);
        client2Account.withdraw(50);

        // Resultados após operações
        client1Account.showExtract();
        client2Account.showExtract();

        // Lista de contas que o banco criado possui
        System.out.println("\nLista de contas do Banco " + bank.getName() + "\n");
        System.out.println(bank.getAccountsList());
    }
}
