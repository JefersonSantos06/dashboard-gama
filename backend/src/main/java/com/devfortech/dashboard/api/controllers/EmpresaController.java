package com.devfortech.dashboard.api.controllers;

import com.devfortech.dashboard.api.dto.EmpresaDto;
import com.devfortech.dashboard.services.EmpresaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/empresa")
@RequiredArgsConstructor
public class EmpresaController {

    private final EmpresaService service;

    @PostMapping
    public ResponseEntity<EmpresaDto> createCliente(@Valid @RequestBody EmpresaDto dto){
        return new ResponseEntity<>(service.createEmpresa(dto), HttpStatus.CREATED);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<EmpresaDto> getBancoByBcCodigo(@PathVariable long id){
        return ResponseEntity.ok(service.getEmpresaById(id));
    }

    @GetMapping
    public ResponseEntity<Page<EmpresaDto>> getAllClientes(@PageableDefault(page = 0, size = 15)Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(service.getAllEmpresas(pageable));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClienteById(@PathVariable long id){
        service.deleteEmpresaById(id);
    }

}
