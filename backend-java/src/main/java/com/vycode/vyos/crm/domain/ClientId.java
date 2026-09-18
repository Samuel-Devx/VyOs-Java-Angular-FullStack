package com.vycode.vyos.crm.domain;

import java.util.UUID;

public record ClientId(UUID id) {
    public  ClientId() {
        this(UUID.randomUUID());
    }
}
