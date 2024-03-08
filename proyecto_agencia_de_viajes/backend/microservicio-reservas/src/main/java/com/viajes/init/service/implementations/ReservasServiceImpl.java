package com.viajes.init.service.implementations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viajes.init.dao.HotelDao;
import com.viajes.init.dao.ReservasDao;
import com.viajes.init.dao.VueloDao;
import com.viajes.init.dtos.HotelDto;
import com.viajes.init.dtos.ReservaDto;
import com.viajes.init.dtos.VueloDto;
import com.viajes.init.mappers.Mapeador;
import com.viajes.init.model.Hotel;
import com.viajes.init.model.Reserva;
import com.viajes.init.model.Vuelo;
import com.viajes.init.service.ReservasService;

@Service
public class ReservasServiceImpl implements ReservasService {

	@Autowired
	ReservasDao reservasDao;
	@Autowired
	HotelDao hotelDao;
	@Autowired
	VueloDao vueloDao;
	@Autowired
	Mapeador mapeador;
	
	
	@Override
	public HotelDto getHotel(int idHotel) {
		Optional<Hotel> hotel = Optional.ofNullable(hotelDao.findById(idHotel));
		return hotel
				.map(h -> mapeador.hotelEntityToDto(h))
				.orElse(null);
	}

	@Override
	public VueloDto getVuelo(int idVuelo) {
		Optional<Vuelo> vuelo = Optional.ofNullable(vueloDao.findById(idVuelo));
		return vuelo
				.map(v -> mapeador.vueloEntityToDto(v))
				.orElse(null);
	}

	@Override
	public List<ReservaDto> catalogoReservas(String usuario) {
		return null;
//		return reservasDao.findAll()
//				.stream()
//				.map(r -> mapeador.reservaEntityToDto(r))
//				.toList();
	}

	@Override
	public void alta(Reserva reserva) {
			reservasDao.save(reserva);
	}

}
