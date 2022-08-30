package com.devfortech.dashboard.services;

import com.devfortech.dashboard.api.dto.ClienteDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClienteService {

    ClienteDto createCliente(ClienteDto dto);

    ClienteDto getClienteById(long id);

    Page<ClienteDto> getAllClientes(Pageable pageable);

    void deleteClienteById(long id);
}
