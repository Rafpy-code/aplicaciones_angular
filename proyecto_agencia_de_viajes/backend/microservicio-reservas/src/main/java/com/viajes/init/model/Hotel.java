package com.viajes.init.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "hoteles")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Hotel {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idHotel;
	private String nombre;
	private int categoria;
	private double precio;
	private boolean disponible;
	private String localizacion;

}
