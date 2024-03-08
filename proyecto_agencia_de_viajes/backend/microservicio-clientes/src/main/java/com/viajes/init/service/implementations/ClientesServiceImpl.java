package com.viajes.init.service.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viajes.init.dao.ClientesDao;
import com.viajes.init.model.Cliente;
import com.viajes.init.service.ClientesService;


@Service
public class ClientesServiceImpl implements ClientesService {
	
	@Autowired
	private ClientesDao clientesDao;

	@Override
	public Cliente devolverCliente(String usuario) {
		Cliente cliente = clientesDao.findByUsuario(usuario);
		return cliente;
	}
	@Override
	public Cliente autenticarCliente(String usuario, String password) {
		Cliente cliente = clientesDao.findByUsuarioAndPassword(usuario, password);
		return cliente;
	}

	@Override
	public boolean altaCliente(Cliente cliente) {
		if(clientesDao.findByUsuario(cliente.getUsuario())==null) {
			clientesDao.save(cliente);
			return true;
		}
		return false;
	}

}
