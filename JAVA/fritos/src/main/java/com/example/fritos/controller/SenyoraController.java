package com.example.fritos.controller;

import com.example.fritos.model.Senyora;
import com.example.fritos.service.SenyoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/puesto")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class SenyoraController {

    @Autowired
    private SenyoraService senyoraService;

    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public List<Senyora> getAllPuestos() {
        return senyoraService.getAllSenyoras();
    }

    @PostMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Senyora createPuesto(@RequestBody Senyora senyora) {
        return senyoraService.saveSenyora(senyora);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Senyora updatePuesto(@PathVariable Long id_senyora, @RequestBody Senyora senyora) {
        return senyoraService.updateSenyora(id_senyora, senyora);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public void deletePuesto(@PathVariable Long id_senyora) {
        senyoraService.deleteSenyora(id_senyora);
    }
}
