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

    public void deleteSenyora(Long id_senyora) {
        senyoraRepository.deleteById(id_senyora);
    }

    public Senyora updateSenyora(Long id_senyora, Senyora senyoraDetails) {
        Senyora senyora = senyoraRepository.findById(id_senyora).orElseThrow();
        senyora.setNombre(senyoraDetails.getNombre());
        senyora.setCedula(senyoraDetails.getCedula());
        senyora.setCelular(senyoraDetails.getCelular());
        return senyoraRepository.save(senyora);
    }
}
