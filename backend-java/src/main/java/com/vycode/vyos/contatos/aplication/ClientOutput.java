package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.Client;

public record ClientOutput(String id, String name, String email, String phoneNumber, String stats) {
    public static ClientOutput fromDomain(Client client) {
        return new ClientOutput(
                client.getId().id().toString(),
                client.getName(),
                client.getEmail(),
                client.getPhoneNumber(),
                client.getStats().toString()
        );
    }
}
