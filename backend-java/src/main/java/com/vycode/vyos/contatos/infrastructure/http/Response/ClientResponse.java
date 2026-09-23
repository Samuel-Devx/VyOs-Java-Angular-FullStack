package com.vycode.vyos.contatos.infrastructure.http.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.vycode.vyos.contatos.aplication.ClientOutput;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record ClientResponse(String id, String name, String email, String phoneNumber, String stats) {
    public static ClientResponse from(ClientOutput clientOutput) {
        return new ClientResponse(clientOutput.id(), clientOutput.name(), clientOutput.email(), clientOutput.phoneNumber(), clientOutput.stats());
    }
}
