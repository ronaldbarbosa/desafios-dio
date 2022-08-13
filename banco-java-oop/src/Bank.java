import Account.Account;

import java.util.ArrayList;
import java.util.List;


public class Bank {
    private String name;
    private List<Account> accountsList = new ArrayList<Account>();

    public Bank(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public List<Account> getAccountsList() {
        return accountsList;
    }

    public void AddAccountToBankList(Account addAccount) {
        this.accountsList.add(addAccount);
        System.out.println(String.format("Parabéns %s, sua conta no Banco %s foi criada com sucesso!", addAccount.owner.getName(), name));
    }
}

