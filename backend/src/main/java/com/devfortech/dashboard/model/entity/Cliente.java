package com.devfortech.dashboard.model.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import java.io.Serializable;



@Entity
@Table(name = "clientes")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Cliente implements Serializable {
    private static final long serialVersionUID = 1284361417739651413L;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String nome;

    @Column
    private String cpf;

    @Column
    private String rua;

    @Column
    private String numero;

    @Column
    private String cidade;

    @Column
    private String estado;

    @Column
    private String cep;

}
