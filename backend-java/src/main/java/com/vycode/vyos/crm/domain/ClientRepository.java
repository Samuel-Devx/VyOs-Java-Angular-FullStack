package com.vycode.vyos.crm.domain;

import com.vycode.vyos.crm.domain.Enum.StatsEnum;

import java.util.List;

public interface ClientRepository {


    List<Client> findAll();
    List<Client> findByStats(StatsEnum stats);
    Client findById(ClientId id);

}
