package com.viajes.init.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.viajes.init.model.Vuelo;

public interface VueloDao extends JpaRepository<Vuelo, Integer> {

	//@Query("select v.company from Vuelo v join v.reservas r where r.vuelo = ?1")
	Vuelo findById(int idVuelo);
	
}
