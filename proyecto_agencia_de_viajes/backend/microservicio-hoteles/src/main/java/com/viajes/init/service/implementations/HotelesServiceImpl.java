package com.viajes.init.service.implementations;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viajes.init.dao.HotelesDao;
import com.viajes.init.model.Hotel;
import com.viajes.init.service.HotelesService;

@Service
public class HotelesServiceImpl implements HotelesService {

	@Autowired
	private HotelesDao hotelesDao;

	private boolean hotelExiste(int identificador) {
		if (hotelesDao.findById(identificador).get() != null) {
			return true;
		}
		return false;
	}

	@Override
	public Hotel datosHotel(int identificador) {
		if (hotelExiste(identificador)) {
			return hotelesDao.findById(identificador).get();
		}
		return null;
	}

	@Override
	public List<String> catalogoHoteles(String localizacion) {
		List<Hotel> nombres = hotelesDao.findByLocalizacion(localizacion);
		List<String> localizaciones;
		return nombres
				.stream()
				.map(n -> n.getNombre())
				.distinct()
				.toList();
	}

	@Override
	public List<String> listaLocalizaciones() {
		List<Hotel> hoteles = hotelesDao.findAll();
		List<String> localizaciones;
		return hoteles
				.stream()
				.map(l -> l.getLocalizacion())
				.distinct()
				.toList();
	}

}
