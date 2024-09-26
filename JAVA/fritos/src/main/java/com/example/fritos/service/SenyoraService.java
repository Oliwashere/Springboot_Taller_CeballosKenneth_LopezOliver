package com.example.fritos.service;

import com.example.fritos.model.Senyora;
import com.example.fritos.repository.SenyoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SenyoraService {

    @Autowired
    private SenyoraRepository senyoraRepository;

    public List<Senyora> getAllSenyoras() {
        return senyoraRepository.findAll();
    }

    public Senyora saveSenyora(Senyora senyora) {
        return senyoraRepository.save(senyora);
    }

    public void deleteSenyora(Long id) {
        senyoraRepository.deleteById(id);
    }

    public Senyora updateSenyora(Long id, Senyora senyoraDetails) {
        Senyora senyora = senyoraRepository.findById(id).orElseThrow();
        senyora.setNombre(senyoraDetails.getNombre());
        senyora.setCedula(senyoraDetails.getCedula());
        senyora.setCelular(senyoraDetails.getCelular());
        senyora.setId_puesto(senyoraDetails.getId_puesto());
        return senyoraRepository.save(senyora);
    }
}
