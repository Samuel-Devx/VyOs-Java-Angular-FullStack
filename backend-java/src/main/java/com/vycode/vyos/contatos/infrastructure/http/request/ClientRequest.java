package com.vycode.vyos.contatos.infrastructure.http.request;

import com.vycode.vyos.contatos.aplication.ClientInput;

public record ClientRequest(String name, String email, String phoneNumber) {
    public ClientInput toInput()  {
        return new ClientInput(name, email, phoneNumber);
    }
}
