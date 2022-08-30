package com.devfortech.dashboard.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@Data
@Entity
@Table(name = "Empresas")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Empresa implements Serializable {
    private static final long serialVersionUID = 9003683586655489905L;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String remetente;

    @Column
    private String cnpj;

    @Column
    private String rua;

    @Column
    private String numero;

    @Column
    private String cidade;

    @Column
    private String estado;

    @Column
    private double valorFrete;

}
