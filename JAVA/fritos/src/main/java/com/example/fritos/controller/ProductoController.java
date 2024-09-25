package com.example.fritos.controller;

import com.example.fritos.model.Producto;
import com.example.fritos.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    @PostMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.saveProducto(producto);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public Producto updateProducto(@PathVariable Long id_producto, @RequestBody Producto producto) {
        return productoService.updateProducto(id_producto, producto);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public void deleteMesa(@PathVariable Long id_producto) {
        productoService.deleteProducto(id_producto);
    }
}
