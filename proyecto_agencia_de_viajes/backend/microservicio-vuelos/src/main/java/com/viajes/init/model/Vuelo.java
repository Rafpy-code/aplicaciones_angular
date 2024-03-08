package com.viajes.init.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vuelos")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Vuelo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idvuelo")
	private int idVuelo;
	private String company;
	private String fecha;
	private double precio;
	private int plazas;
	private String destino;

}
