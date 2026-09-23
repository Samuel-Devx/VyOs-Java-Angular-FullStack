package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.Enum.StatsEnum;

public record ClientInput(String name, String email, String phoneNumber) {
    public Client toDomain() {
        return new Client(
                new ClientId(),
                this.name,
                this.email,
                this.phoneNumber,
                StatsEnum.Active
        );
    }
}
