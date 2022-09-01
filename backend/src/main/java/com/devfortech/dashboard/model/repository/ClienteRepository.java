package com.devfortech.dashboard.model.repository;

import ch.qos.logback.core.net.server.Client;
import com.devfortech.dashboard.model.entity.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> getClienteById(long id);

    @Query(value = "select distinct c from Cliente c where c.nome like %:search% or c.cep like %:search% " +
            " or c.cidade like %:search% or c.cpf like %:search% or c.estado like %:search% or c.numero like %:search% or c.rua like %:search%")
    Page<Cliente> getClienteSearchAll(Pageable pageable, @Param("search") String search);
}
