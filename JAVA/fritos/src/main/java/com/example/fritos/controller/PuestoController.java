package com.example.fritos.controller;

import com.example.fritos.model.Puesto;
import com.example.fritos.service.PuestoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/puesto")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PuestoController {

    @Autowired
    private PuestoService puestoService;

    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public List<Puesto> getAllPuestos() {
        return puestoService.getAllPuestos();
    }

    @PostMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Puesto createPuesto(@RequestBody Puesto puesto) {
        return puestoService.savePuesto(puesto);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Puesto updatePuesto(@PathVariable Long id_puesto, @RequestBody Puesto puesto) {
        return puestoService.updatePuesto(id_puesto, puesto);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public void deletePuesto(@PathVariable Long id_puesto) {
        puestoService.deletePuesto(id_puesto);
    }
}
