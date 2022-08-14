package one.digitalinnovation.gof;
import one.digitalinnovation.gof.facade.Facade;
import one.digitalinnovation.gof.singleton.*;
import one.digitalinnovation.gof.strategy.*;

public class Test {
    public static void main(String[] args) {
        // Singleton
        System.out.println("Singleton");
        SingletonLazy lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);
        lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);

        SingletonEager eager = SingletonEager.getInstancia();
        System.out.println(eager);
        eager = SingletonEager.getInstancia();
        System.out.println(eager);

        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
        System.out.println(lazyHolder);
        lazyHolder = SingletonLazyHolder.getInstancia();
        System.out.println(lazyHolder);

        // Strategy
        System.out.println();
        System.out.println("Strategy");
        Comportamento normal = new ComportamentoNormal();
        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento agresivo = new ComportamentoAgressivo();

        Robo robo = new Robo();

        robo.setComportamento(normal);
        robo.mover();
        robo.mover();

        robo.setComportamento(defensivo);
        robo.mover();
        robo.mover();

        robo.setComportamento(agresivo);
        robo.mover();
        robo.mover();

        // Facade
        System.out.println();
        System.out.println("Facade");
        Facade facade = new Facade();
        facade.migrarCliente("Ronald", "13020-040");
    }
}
