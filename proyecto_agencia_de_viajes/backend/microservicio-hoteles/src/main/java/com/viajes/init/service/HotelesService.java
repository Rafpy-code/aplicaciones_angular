package com.viajes.init.service;

import java.util.List;

import com.viajes.init.model.Hotel;

public interface HotelesService {
	
	Hotel datosHotel(int identificador);
	List<String> catalogoHoteles(String localizacion);
	List<String> listaLocalizaciones();

}
