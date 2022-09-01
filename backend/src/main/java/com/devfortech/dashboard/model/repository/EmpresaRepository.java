package com.devfortech.dashboard.model.repository;

import com.devfortech.dashboard.model.entity.Cliente;
import com.devfortech.dashboard.model.entity.Empresa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    Optional<Empresa> getEmpresaById(long id);

    @Query(value = "select distinct e from Empresa e where cast(e.valorFrete as string) like %:e.id% or e.remetente like %:search% " +
            "or e.cnpj like %:search% or e.rua like %:search% or e.numero like %:search% or e.cidade like %:search% " +
            "or e.estado like %:search% or cast(e.valorFrete as string) like %:search%",
            nativeQuery = true)
    Page<Empresa> getEmpresaSearchAll(Pageable pageable, @Param("search") String search);
}
