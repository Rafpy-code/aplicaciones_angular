package com.viajes.init.service;

import com.viajes.init.model.Cliente;

public interface ClientesService {
	
	Cliente devolverCliente(String usuario);
	Cliente autenticarCliente(String usuario, String password);
	boolean altaCliente(Cliente cliente);
	
}
