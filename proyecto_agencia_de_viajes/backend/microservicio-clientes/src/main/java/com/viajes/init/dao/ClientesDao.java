package com.viajes.init.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.viajes.init.model.Cliente;

public interface ClientesDao extends JpaRepository<Cliente, String> {
	
	Cliente findByUsuarioAndPassword(String u, String p);

	Cliente findByUsuario(String usuario);
	// heredados:
	// save(Cliente cliente)
}
