package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.ClientInput;
import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.Enum.StatsEnum;

import java.util.UUID;

public final class ClientFixture {

    private ClientFixture() {}


    public static Client client() {
        return new Client(
                new ClientId(UUID.randomUUID()),
                "Maria Silva",
                "maria@email.com",
                "24999999999",
                        StatsEnum.Active);
    }


    public static ClientInput input() {
        return new ClientInput("Maria Silva", "maria@email.com", "24999999999");
    }
}
