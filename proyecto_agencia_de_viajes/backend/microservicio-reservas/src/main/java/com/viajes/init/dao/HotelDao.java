package com.viajes.init.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.viajes.init.model.Hotel;

public interface HotelDao extends JpaRepository<Hotel, Integer> {

	//@Query("select h.nombre from Hotel h join h.reservas r where r.hotel = ?1")
	Hotel findById(int idHotel);
	
}
