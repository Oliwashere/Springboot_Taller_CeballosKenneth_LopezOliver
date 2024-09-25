package com.example.fritos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Senyora {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_senyora;

    private String nombre;
    private String cedula;
    private String celular;

    public Senyora() {
    }

    public Senyora(String nombre, String cedula, String celular) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.celular = celular;
    }

    public Long getId() {
        return id_senyora;
    }

    public void setId(Long id_senyora) {
        this.id_senyora = id_senyora;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }
}
