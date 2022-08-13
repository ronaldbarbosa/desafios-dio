package Client;

public class Client {
    private String name;
    private long cpf;
    private String email;

    public Client(String name, long cpf, String email) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
    }

    public String getName() {
        return this.name;
    }
}
