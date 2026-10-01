package com.vycode.vyos.contatos.infrastructure.persistence.entity;

import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.Enum.StatsEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ClientEntity {
    @Id
    private UUID id;

    @Column(nullable = false)
    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
    private String name;

    @Column(nullable = false, unique = true)
    @Email(message = "E-mail inválido")
    @NotBlank
    private String email;

    @NotBlank(message = "Telefone é obrigatório")
    @Pattern(
            regexp = "^\\d{10,11}$",
            message = "Telefone deve ter 10 ou 11 dígitos (DDD + número), somente números"
    )
    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatsEnum stats;

    public static ClientEntity fromDomain(com.vycode.vyos.contatos.domain.Client client) {
        ClientEntity entity = new ClientEntity();
        entity.setId(client.getId().id());
        entity.setName(client.getName());
        entity.setEmail(client.getEmail());
        entity.setPhoneNumber(client.getPhoneNumber());
        entity.setStats(client.getStats());
        return entity;
    }
    public Client toClient(){
        return new Client(
                new ClientId(id),
                name,
                email,
                phoneNumber,
                stats
        );
    }

}
