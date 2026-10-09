package com.vycode.vyos.contatos.infrastructure.persistence.repository;

import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.contatos.domain.Enum.StatsEnum;
import com.vycode.vyos.contatos.infrastructure.persistence.entity.ClientEntity;
import com.vycode.vyos.exception.ContactNotFound;
import com.vycode.vyos.exception.ErrorCode;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
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
    public List<Client> search(String term) {
        var entities = repository.search(term);
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
    public Optional<Client> findById(ClientId id) {
        return repository.findById(id.id())
                .map(ClientEntity::toClient);
    }

    @Override
    public Client save(Client client) {
        var entity = ClientEntity.fromDomain(client);
        var savedEntity = repository.save(entity);
        return savedEntity.toClient();
    }

    @Override
    public void delete(ClientId id) {
        repository.deleteById(id.id());
    }

    @Override
    public Client update(Client client) {
        var entity = ClientEntity.fromDomain(client);
        var updatedEntity = repository.save(entity);
        return updatedEntity.toClient();
    }
}
