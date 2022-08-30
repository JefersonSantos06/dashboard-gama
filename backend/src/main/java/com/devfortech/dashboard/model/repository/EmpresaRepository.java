package com.devfortech.dashboard.model.repository;

import com.devfortech.dashboard.model.entity.Cliente;
import com.devfortech.dashboard.model.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    Optional<Empresa> getEmpresaById(long id);
}
