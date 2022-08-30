package com.devfortech.dashboard.api.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmpresaDto {

    private long id;
    private String remetente;
    private String cnpj;
    private String rua;
    private String numero;
    private String cidade;
    private String estado;
    private double valorFrete;

}
