package com.vycode.vyos.contatos.domain;

import com.vycode.vyos.contatos.domain.Enum.StatsEnum;

import java.util.List;
import java.util.Optional;

public interface ClientRepository {


    List<Client> findAll();
    List<Client> findByStats(StatsEnum stats);
    Optional<Client> findById(ClientId id);
    Client save(Client client);
    void delete(ClientId id);
    Client update(Client client);
}
