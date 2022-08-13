package Account;

import Client.Client;

public abstract class Account implements IAccount {
    private static final int BRANCH = 1;
    private static int Account_Number = 1;

    protected int branch;
    protected int account_number;
    protected double balance;
    public Client owner;

    public Account(Client owner) {
        this.branch = BRANCH;
        this.account_number = Account_Number++;
        this.balance = 0d;
        this.owner = owner;
    }

    @Override
    public void withdraw(double value) {
        if (this.balance >= value) {
            this.balance -= value;
            System.out.println(String.format("\nSaque no valor de R$ %.2f realizado com sucesso!", value));
        } else {
            System.out.println("\nNão foi possível realizar o saque. Saldo insuficiente.");
        }
    }

    @Override
    public void deposit(double value) {
        this.balance += value;
        System.out.println(String.format("\nDepósito/transferência no valor de R$ %.2f realizado com sucesso!", value));
    }

    @Override
    public void transfer(double value, Account destinyAccount) {
        if (this.balance >= value) {
            this.balance -= value;
            destinyAccount.deposit(value);
        } else {
            System.out.println("\nNão foi possível realizar a transferência. Saldo insuficiente.");
        }
    }

    @Override
    public String toString() {
        return  "\nNúmero da conta:" + account_number +
                "\nNome do cliente: " + owner.getName() +
                "\n";
    }

    protected void showCommonInfo() {
        System.out.println(String.format("Client: %s", this.owner.getName()));
        System.out.println(String.format("Branch: %d", this.branch));
        System.out.println(String.format("Account number: %d", this.account_number));
        System.out.println(String.format("Balance: %.2f", this.balance));
    }
}
