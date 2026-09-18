package com.vycode.vyos.crm.infrastructure.persistence.entity;

import com.vycode.vyos.crm.domain.Client;
import com.vycode.vyos.crm.domain.ClientId;
import com.vycode.vyos.crm.domain.Enum.StatsEnum;
import jakarta.persistence.*;
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
    private String name;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatsEnum stats;

    public static ClientEntity fromDomain(com.vycode.vyos.crm.domain.Client client) {
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
