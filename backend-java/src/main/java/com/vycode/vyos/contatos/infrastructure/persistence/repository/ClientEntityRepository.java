package com.vycode.vyos.contatos.infrastructure.persistence.repository;

import com.vycode.vyos.contatos.infrastructure.persistence.entity.ClientEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ClientEntityRepository extends CrudRepository<ClientEntity, UUID> {
    List<ClientEntity> findByStats(String stats);
    @Query("""
    SELECT c FROM ClientEntity c
    WHERE LOWER(c.name)        LIKE LOWER(CONCAT('%', :term, '%'))
       OR LOWER(c.email)       LIKE LOWER(CONCAT('%', :term, '%'))
       OR c.phoneNumber        LIKE CONCAT('%', :term, '%')
    ORDER BY c.name
    """)
    List<ClientEntity> search(@Param("term") String term);
}
