package com.devfortech.dashboard.services;

import com.devfortech.dashboard.api.dto.ClienteDto;
import com.devfortech.dashboard.api.dto.EmpresaDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmpresaService {

    EmpresaDto createEmpresa(EmpresaDto dto);

    EmpresaDto getEmpresaById(long id);

    Page<EmpresaDto> getAllEmpresas(Pageable pageable);

    void deleteEmpresaById(long id);

}
