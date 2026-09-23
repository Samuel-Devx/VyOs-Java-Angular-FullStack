package com.vycode.vyos.contatos.domain;

import com.vycode.vyos.contatos.aplication.ClientInput;
import com.vycode.vyos.contatos.domain.Enum.StatsEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Client {
    private ClientId id;
    private String name;
    private String email;
    private String phoneNumber;
    private StatsEnum stats;

    public void applyPartialUpdate(ClientInput input) {
        if (input.name() != null) {
            this.name = input.name();
        }
        if (input.email() != null) {
            this.email = input.email();
        }
        if (input.phoneNumber() != null) {
            this.phoneNumber = input.phoneNumber();
        }
    }

}
