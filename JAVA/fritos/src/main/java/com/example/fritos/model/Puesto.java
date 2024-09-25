package com.example.fritos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Puesto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_puesto;

    private String ubicacion;

    public Puesto() {
    }

    public Puesto(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Long getId() {
        return id_puesto;
    }

    public void setId(Long id_puesto) {
        this.id_puesto = id_puesto;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}
