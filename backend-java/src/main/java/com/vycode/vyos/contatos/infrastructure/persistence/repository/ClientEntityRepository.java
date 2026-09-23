package com.vycode.vyos.contatos.infrastructure.persistence.repository;

import com.vycode.vyos.contatos.infrastructure.persistence.entity.ClientEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ClientEntityRepository extends CrudRepository<ClientEntity, UUID> {
    List<ClientEntity> findByStats(String stats);
}
