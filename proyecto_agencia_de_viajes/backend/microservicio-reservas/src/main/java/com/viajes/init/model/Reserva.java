package com.viajes.init.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "reservas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Reserva {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)		
		private int idreserva;
		private String usuario;
		
		@ManyToOne()
		@JoinColumn(name = "hotel",referencedColumnName = "idHotel")
		private Hotel hotel;
		
		@ManyToOne()
		@JoinColumn(name = "vuelo",referencedColumnName = "idvuelo")
		private Vuelo vuelo;
		private double precio;

}
