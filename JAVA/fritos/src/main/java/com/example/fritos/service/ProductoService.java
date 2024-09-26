package com.example.fritos.service;

import com.example.fritos.model.Producto;
import com.example.fritos.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }

    public Producto updateProducto(Long id, Producto productoDetails) {
        Producto producto = productoRepository.findById(id).orElseThrow();
        producto.setNombre_producto(productoDetails.getNombre_producto());
        producto.setPrecio(productoDetails.getPrecio());
        producto.setId_puesto(productoDetails.getId_puesto());
        return productoRepository.save(producto);
    }
}
