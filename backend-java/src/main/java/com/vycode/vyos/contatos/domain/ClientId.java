package com.vycode.vyos.contatos.domain;

import java.util.UUID;

public record ClientId(UUID id) {
    public  ClientId() {
        this(UUID.randomUUID());
    }
}
