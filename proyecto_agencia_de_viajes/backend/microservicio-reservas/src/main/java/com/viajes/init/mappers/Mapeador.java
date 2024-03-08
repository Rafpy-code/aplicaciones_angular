package com.viajes.init.mappers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.viajes.init.dtos.HotelDto;
import com.viajes.init.dtos.ReservaDto;
import com.viajes.init.dtos.VueloDto;
import com.viajes.init.model.Hotel;
import com.viajes.init.model.Reserva;
import com.viajes.init.model.Vuelo;
import com.viajes.init.service.ReservasService;

@Component
public class Mapeador {
	
	public HotelDto hotelEntityToDto(Hotel hotel) {
		return hotel != null
				? new HotelDto(
						hotel.getIdHotel(),
						hotel.getNombre(),
						hotel.getCategoria(),
						hotel.getPrecio(),
						hotel.isDisponible(),
						hotel.getLocalizacion()
						)
						: null;
	}
	
	public Hotel hotelDtoToEntity(HotelDto hotelDto) {
		return new Hotel(
				0,
				hotelDto.getNombre(),
				hotelDto.getCategoria(),
				hotelDto.getPrecio(),
				hotelDto.isDisponible(),
				hotelDto.getLocalizacion()
				);
	}
	
	public VueloDto vueloEntityToDto(Vuelo vuelo) {
		return vuelo != null
				? new VueloDto(
						vuelo.getIdVuelo(),
						vuelo.getCompany(),
						vuelo.getFecha(),
						vuelo.getPrecio(),
						vuelo.getPlazas(),
						vuelo.getDestino()
						)
						: null;
	}
	
	public Vuelo vueloDtoToEntity(VueloDto vueloDto) {
		return new Vuelo(
				0,
				vueloDto.getCompany(),
				vueloDto.getFecha(),
				vueloDto.getPrecio(),
				vueloDto.getPlazas(),
				vueloDto.getDestino()
				);				
	}
/*
	public ReservaDto reservaEntityToDto(Reserva reserva) {
		return new ReservaDto(
				reserva.getIdreserva(),
				reserva.getUsuario(),
				reserva.getIdreserva(),
				reserva.getIdreserva(),
				reserva.getPrecio()
				);
	}
	
	public Reserva reservaDtoToEntity(ReservaDto reservaDto) {
		return new Reserva(
				0, 
				reservaDto.getUsuario(),
				reservaDto.getHotelDto(),
				reservaDto.getVueloDto(),
				reservaDto.getPrecio()
				);
	}
*/	
}
