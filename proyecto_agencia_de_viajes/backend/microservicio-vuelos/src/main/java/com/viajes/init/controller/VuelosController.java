package com.viajes.init.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.viajes.init.model.Vuelo;
import com.viajes.init.service.VuelosService;

@CrossOrigin("*")
@RestController
public class VuelosController {
	
	@Autowired
	private VuelosService service;
	
	@GetMapping(value = "vuelo/{identificador}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Vuelo> datosDelVuelo(@PathVariable("identificador") int identificador) {
		return new ResponseEntity<Vuelo>(service.datosVuelo(identificador), HttpStatus.OK);
	}
	
	@GetMapping(value = "vuelos/{destino}/{plazas}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Vuelo>> catalogoDeVuelos(@PathVariable("destino") String destino, @PathVariable("plazas") int plazas) {
		return new ResponseEntity<List<Vuelo>>(service.catalogoVuelos(destino, plazas), HttpStatus.OK);
	}
	
	@PutMapping(value = "actualizar/{identificador}/{plazasReservadas}")
	public ResponseEntity<Void> actualizarVuelo(@PathVariable("identificador") int identificador, @PathVariable("plazasReservadas") int plazasReservadas) {
		service.actualizarPlzas(identificador, plazasReservadas);
		return new ResponseEntity<Void>( HttpStatus.OK);
	}

}
