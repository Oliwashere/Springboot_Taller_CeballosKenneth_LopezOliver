package com.example.fritos.service;

import com.example.fritos.model.Puesto;
import com.example.fritos.repository.PuestoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PuestoService {

    @Autowired
    private PuestoRepository puestoRepository;

    public List<Puesto> getAllPuestos() {
        return puestoRepository.findAll();
    }

    public Puesto savePuesto(Puesto puesto) {
        return puestoRepository.save(puesto);
    }

    public void deletePuesto(Long id) {
        puestoRepository.deleteById(id);
    }

    public Puesto updatePuesto(Long id, Puesto puestoDetails) {
        Puesto puesto = puestoRepository.findById(id).orElseThrow();
        puesto.setUbicacion(puestoDetails.getUbicacion());
        return puestoRepository.save(puesto);
    }
}
