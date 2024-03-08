package com.viajes.init.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReservaDto {
/*
	private int idreserva;
	private String usuario;
	private HotelDto hotelDto;
	private VueloDto vueloDto;
	private double precio;
*/
		private int idReserva;
		private String usuario;
		@JsonProperty(value = "vuelo")
		private VueloDto vueloDto;
		@JsonProperty(value = "hotel")
		private HotelDto hotelDto;
		private double precio;
		/*
		public ReservaDto() {
			vueloDto=new VueloDto();
			hotelDto=new HotelDto();
		}
		*/
	} 

