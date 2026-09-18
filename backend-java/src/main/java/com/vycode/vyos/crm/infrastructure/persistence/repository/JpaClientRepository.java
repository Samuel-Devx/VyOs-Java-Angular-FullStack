package com.vycode.vyos.crm.infrastructure.persistence.repository;

import com.vycode.vyos.crm.domain.Client;
import com.vycode.vyos.crm.domain.ClientId;
import com.vycode.vyos.crm.domain.ClientRepository;
import com.vycode.vyos.crm.domain.Enum.StatsEnum;
import com.vycode.vyos.crm.infrastructure.persistence.entity.ClientEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.StreamSupport;

@Repository
public class JpaClientRepository implements ClientRepository {

    private final ClientEntityRepository repository;

    public JpaClientRepository(ClientEntityRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Client> findAll() {
        var entities = repository.findAll();
        return StreamSupport
                .stream(entities.spliterator(), false)
                .map(ClientEntity::toClient)
                .toList();
    }

    @Override
    public List<Client> findByStats(StatsEnum stats) {
        var entities = repository.findByStats(stats.name());
        return StreamSupport
                .stream(entities.spliterator(), false)
                .map(ClientEntity::toClient)
                .toList();
    }

    @Override
    public Client findById(ClientId id) {
        var entity = repository.findById(id.id()).orElseThrow(() -> new RuntimeException("Client not found"));
        return entity.toClient();
    }
}
