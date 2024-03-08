package com.viajes.init.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.viajes.init.dtos.ReservaDto;
import com.viajes.init.model.Reserva;
import com.viajes.init.service.ReservasService;

@CrossOrigin("*")
@RestController
public class ReservasController {

	@Autowired
	ReservasService service;

	@GetMapping(value = "reservas/{cliente}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<ReservaDto>> catalogoDeReservas(@PathVariable("cliente") String cliente) {
		return new ResponseEntity<List<ReservaDto>>(service.catalogoReservas(cliente), HttpStatus.OK);
	}

	@PostMapping(value = "alta", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> altaCliente(@RequestBody Reserva reserva) {
		try {
			service.alta(reserva);
			System.out.println("Reserva guardada correctamente");
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("Esta reserva ya existe");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}
}
