package com.viajes.init.service.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viajes.init.dao.VuelosDao;
import com.viajes.init.model.Vuelo;
import com.viajes.init.service.VuelosService;

@Service
public class VuelosServiceImpl implements VuelosService {
	
	@Autowired
	private VuelosDao vuelosDao;
	
	private Vuelo vuelo(int identificador) {
		return vuelosDao.findById(identificador).get();
	}

	@Override
	public Vuelo datosVuelo(int identificador) {
		return vuelosDao.findById(identificador).get();
	}

	@Override
	public List<Vuelo> catalogoVuelos(String destino, int numeroPlazas) {
		return vuelosDao.findByDestinoAndPlazas(destino, numeroPlazas);
	}

	@Override
	public void actualizarPlzas(int identificador, int plazasReservadas) {
		Vuelo v = vuelo(identificador);
		v.setPlazas(v.getPlazas()-plazasReservadas);
		vuelosDao.save(v);

	}

}
