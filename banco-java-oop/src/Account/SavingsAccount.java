package Account;

import Client.Client;

public class SavingsAccount extends Account{
    private final double INCAME = 2.3d;

    public SavingsAccount(Client owner) {
        super(owner);
    }

    @Override
    public void showExtract() {
        System.out.println("\n----- Extrato do cliente -----");
        System.out.println("Tipo: conta poupança");
        System.out.println(String.format("Rendimento: %.1f porcento ao mês", INCAME));
        super.showCommonInfo();
    }
}
