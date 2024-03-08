package com.viajes.init.service;

import java.util.List;

import com.viajes.init.model.Vuelo;

public interface VuelosService {
	
	/*
	 Lista de vuelos a partir de un destino y número de plazas
     Actualización de plazas a partir de identificador de vuelo y plazas reservadas (securizado mediante token JWT para que solo usuarios determinados puedan utilizarlo)
     Datos de Vuelo por identificador 
	 */
	
	Vuelo datosVuelo(int identificador);
	
	List<Vuelo> catalogoVuelos(String destino, int numeroPlazas);
	
	void actualizarPlzas(int identificador, int plazasReservadas);

}
