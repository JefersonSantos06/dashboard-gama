package com.devfortech.dashboard.services.impl;
import com.devfortech.dashboard.api.dto.EmpresaDto;
import com.devfortech.dashboard.api.dto.EmpresaDto;
import com.devfortech.dashboard.api.exception.ResourceNotFoundException;
import com.devfortech.dashboard.model.entity.Cliente;
import com.devfortech.dashboard.model.entity.Empresa;
import com.devfortech.dashboard.model.repository.EmpresaRepository;
import com.devfortech.dashboard.services.EmpresaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmpresaServiceImpl implements EmpresaService {

    private final EmpresaRepository repository;


    @Override
    public EmpresaDto createEmpresa(EmpresaDto dto){
        Empresa entity = repository.save(mapToEntity(dto));
        return mapToDto(entity);
    }

    @Override
    public EmpresaDto getEmpresaById(long id){
        return mapToDto(getEntity(id));
    }

    @Override
    public Page<EmpresaDto> getAllEmpresas(Pageable pageable, String search){
        Page<Empresa> page;
        if (search != null && search != ""){
            page = repository.getEmpresaSearchAll(pageable, search);
        }else{
            page = repository.findAll(pageable);
        }

        long totalElements = page.getTotalElements();
        return new PageImpl<>(page.getContent()
                .stream()
                .map(x -> new EmpresaDto(
                        x.getId(),
                        x.getRemetente(),
                        x.getCnpj(),
                        x.getRua(),
                        x.getNumero(),
                        x.getCidade(),
                        x.getEstado(),
                        x.getValorFrete()
                )).collect(Collectors.toList()), pageable, totalElements);
    }


    @Override
    public void deleteEmpresaById(long id){
        repository.delete(getEntity(id));
    }


    @Override
    public EmpresaDto update(EmpresaDto dto, long id) {
        Empresa entity = getEntity(id);
        BeanUtils.copyProperties(mapToEntity(dto), entity);
        entity.setId(id);
        return mapToDto(repository.save(entity));
    }


    private EmpresaDto mapToDto(Empresa entity){
        return EmpresaDto.builder()
                .id(entity.getId())
                .remetente(entity.getRemetente())
                .cnpj(entity.getCnpj())
                .rua(entity.getRua())
                .numero(entity.getNumero())
                .cidade(entity.getCidade())
                .estado(entity.getEstado())
                .valorFrete(entity.getValorFrete())
                .build();
    }

    private Empresa mapToEntity(EmpresaDto dto){
        Empresa entity = new Empresa();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    private Empresa getEntity(long id){
        return repository.getEmpresaById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Empresa", "ID", id));
    }

}
