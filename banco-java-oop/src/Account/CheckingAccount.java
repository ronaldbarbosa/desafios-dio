package Account;

import Client.Client;

public class CheckingAccount extends Account {

    public CheckingAccount(Client owner) {
        super(owner);
    }

    @Override
    public void showExtract() {
        System.out.println("\n----- Extrato do cliente -----");
        System.out.println("Tipo: conta corrente");
        super.showCommonInfo();
    }
}
