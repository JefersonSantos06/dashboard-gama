package com.devfortech.dashboard.services.impl;

import com.devfortech.dashboard.api.dto.ClienteDto;
import com.devfortech.dashboard.api.exception.ResourceNotFoundException;
import com.devfortech.dashboard.model.entity.Cliente;
import com.devfortech.dashboard.model.repository.ClienteRepository;
import com.devfortech.dashboard.services.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository repository;

    @Override
    public ClienteDto createCliente(ClienteDto dto){
        Cliente entity = repository.save(mapToEntity(dto));
        return mapToDto(entity);
    }

    @Override
    public ClienteDto getClienteById(long id){
        return mapToDto(getEntity(id));
    }

    @Override
    public void deleteClienteById(long id){
        repository.delete(getEntity(id));
    }


    @Override
    public Page<ClienteDto> getAllClientes(Pageable pageable){
        Page<Cliente> page = repository.findAll(pageable);
        long totalElements = page.getTotalElements();
        return new PageImpl<>(page.getContent()
                .stream()
                .map(x -> new ClienteDto(
                        x.getId(),
                        x.getNome(),
                        x.getCpf(),
                        x.getRua(),
                        x.getNumero(),
                        x.getCidade(),
                        x.getCep(),
                        x.getEstado()
                )).collect(Collectors.toList()), pageable, totalElements);
    }

    @Override
    public ClienteDto update(ClienteDto dto, long id){
        Cliente entity = getEntity(id);
        BeanUtils.copyProperties(dto, entity);
        entity.setId(entity.getId());
        return mapToDto(repository.save(entity));
    }

    private ClienteDto mapToDto(Cliente entity){
        return ClienteDto.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .cpf(entity.getCpf())
                .rua(entity.getRua())
                .numero(entity.getNumero())
                .cidade(entity.getCidade())
                .estado(entity.getEstado())
                .cep(entity.getCep())
                .build();
    }

    private Cliente mapToEntity(ClienteDto dto){
        Cliente entity = new Cliente();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    private Cliente getEntity(long id){
        return repository.getClienteById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente", "ID", id));
    }

}
