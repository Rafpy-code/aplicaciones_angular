package com.viajes.init.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.viajes.init.model.Cliente;
import com.viajes.init.service.ClientesService;

@CrossOrigin
@RestController
public class ClientesController {

	@Autowired
	private ClientesService clientesService;

	@PostMapping(value = "alta", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Cliente> altaCliente(@RequestBody Cliente cliente) {
		try {
			if (clientesService.altaCliente(cliente)) {
			System.out.println("Cliente guardado correctamente");
			return new ResponseEntity<>(HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		} catch (Exception e) {
			System.out.println("Este cliente ya existe");
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}

	@GetMapping(value = "login/{usuario}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Cliente> login(@PathVariable("usuario") String usuario,
			@PathVariable("password") String password) {		
		Cliente cliente = clientesService.autenticarCliente(usuario, password);		
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}

}
