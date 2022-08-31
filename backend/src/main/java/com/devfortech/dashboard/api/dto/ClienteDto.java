package com.devfortech.dashboard.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClienteDto {

    private long id;
    private String nome;
    private String cpf;
    private String rua;
    private String numero;
    private String cidade;
    private String cep;
    private String estado;


}
