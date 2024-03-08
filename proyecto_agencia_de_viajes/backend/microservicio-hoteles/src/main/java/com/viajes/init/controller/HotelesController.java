package com.viajes.init.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.viajes.init.model.Hotel;
import com.viajes.init.service.HotelesService;

@CrossOrigin("*")
@RestController
public class HotelesController {
	
	@Autowired
	private HotelesService service;
	
	@GetMapping(value = "localizaciones", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<String>> localizacionesDispononibles(){
		return new ResponseEntity<List<String>>(service.listaLocalizaciones(), HttpStatus.OK);
	}
	
	@GetMapping(value = "hotel/{identificador}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Hotel> datosDelHotel(@PathVariable("identificador") int identificador) {
		return new ResponseEntity<Hotel>(service.datosHotel(identificador), HttpStatus.OK);
	}
	
	@GetMapping(value = "hoteles/{localizacion}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<String>> catalogoHoteles(@PathVariable("localizacion") String localizacion) {
		return new ResponseEntity<List<String>>(service.catalogoHoteles(localizacion), HttpStatus.OK);
	}

}
