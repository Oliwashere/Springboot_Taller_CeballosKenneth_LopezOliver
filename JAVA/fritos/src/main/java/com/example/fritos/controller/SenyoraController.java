package com.example.fritos.controller;

import com.example.fritos.model.Senyora;
import com.example.fritos.service.SenyoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/senyora")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class SenyoraController {

    @Autowired
    private SenyoraService senyoraService;

    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public List<Senyora> getAllSenyoras() {
        return senyoraService.getAllSenyoras();
    }

    @PostMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Senyora createSenyora(@RequestBody Senyora senyora) {
        return senyoraService.saveSenyora(senyora);
    }

    @PutMapping("/{id}")
    public Senyora updateSenyora(@PathVariable("id") Long id, @RequestBody Senyora senyora) {
        return senyoraService.updateSenyora(id, senyora);
    }

    @DeleteMapping("/{id}")
    public void deleteSenyora(@PathVariable("id") Long id) {
        senyoraService.deleteSenyora(id);
    }
}
