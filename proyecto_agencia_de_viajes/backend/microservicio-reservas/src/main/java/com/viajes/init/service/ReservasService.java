package com.viajes.init.service;

import java.util.List;

import com.viajes.init.dtos.HotelDto;
import com.viajes.init.dtos.ReservaDto;
import com.viajes.init.dtos.VueloDto;
import com.viajes.init.model.Reserva;

public interface ReservasService {
	
	HotelDto getHotel(int idHotel);
	
	VueloDto getVuelo(int idVuelo);
	
	List<ReservaDto> catalogoReservas(String usuario);
	
	void alta(Reserva reserva);

}
