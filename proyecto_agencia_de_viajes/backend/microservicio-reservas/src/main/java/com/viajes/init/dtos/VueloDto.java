package com.viajes.init.dtos;

import com.viajes.init.model.Vuelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class VueloDto {
	
	private int idVuelo;
	private String company;
	private String fecha;
	private double precio;
	private int plazas;
	private String destino;

}
