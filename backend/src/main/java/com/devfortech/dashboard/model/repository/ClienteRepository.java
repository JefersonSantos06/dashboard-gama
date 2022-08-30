package com.devfortech.dashboard.model.repository;

import ch.qos.logback.core.net.server.Client;
import com.devfortech.dashboard.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> getClienteById(long id);
}
