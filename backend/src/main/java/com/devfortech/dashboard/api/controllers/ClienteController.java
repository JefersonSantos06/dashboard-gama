package com.devfortech.dashboard.api.controllers;

import ch.qos.logback.core.net.server.Client;
import com.devfortech.dashboard.api.dto.ClienteDto;
import com.devfortech.dashboard.services.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/cliente")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService service;

    @PostMapping
    public ResponseEntity<ClienteDto> createCliente(@Valid @RequestBody ClienteDto dto){
        return new ResponseEntity<>(service.createCliente(dto), HttpStatus.CREATED);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<ClienteDto> getBancoByBcCodigo(@PathVariable long id){
        return ResponseEntity.ok(service.getClienteById(id));
    }

    @GetMapping
    public ResponseEntity<Page<ClienteDto>> getAllClientes(@PageableDefault(page = 0, size = 15)Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(service.getAllClientes(pageable));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClienteById(@PathVariable long id){
        service.deleteClienteById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<ClienteDto> update(@Valid @RequestBody ClienteDto dto, @PathVariable long id){
        ClienteDto newDto = service.update(dto, id);
        return new ResponseEntity<>(newDto, HttpStatus.OK);
    }
}
