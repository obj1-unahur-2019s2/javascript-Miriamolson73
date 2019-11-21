	
class ChevroletCorsa {
    constructor(){
    this._color=azul
    }
   capacidad() { return 4  }
   velocidadMaxima(){return 150}
   peso(){return 1300}
   color(){return this._color}
   setColor()(nuevoColor){
	   this._color=nuevoColor
   }
  
  
}	
const azul= {}
const rojo= {}
const verde= {}
const blanco={}
const beige={}
const negro={}




class RenaultKwid {
   constructor(){
	this._tieneTanqueAdicional=true
}
   capacidad() {
    if (this._tieneTanqueAdicional()) {return 3}
    else {return 4}  
  }
  velocidadMaxima(){
  	 if (this._tieneTanqueAdicional()) {return 120}
    else {return 110}  
  	}
   peso(){
  	 if (this._tieneTanqueAdicional()) {return 1200+150}
    else {return 1200}  
  }
  color() { return azul }
  tieneTanqueAdicional(){return this._tieneTanqueAdicional}
  setTieneTanqueAdicional(estado){
	  this._tieneTanqueAdicional()=estado
  }

}




class AutoEspecial {
    constructor (col,pes){

   this._color=col
   this._peso=pes
	}
	capacidad() { return 4  }
	velocidadMaxima(){return 100}
	
	color(){return this._color}
	
	}
}


// sería como el depósito, maneja una colección de rodados
class Dependencia {
	constructor(empl){
	this._flota=[]
	this._empleados=empl
	}
	agregarAFlota(rodado){ this._flota.push(rodado)}

	pesoTotalFlota(){
		var total=0
	     this._flota.forEach(auto=>total=total+ auto.peso())
		return total
		}

//pesoTotalFlota()`, la suma del peso de cada rodado afectado a la flota.
    estaBienEquipada() {
//estaBienEquipada()`, es verdadero si la flota tiene al menos 3 rodados
//, y además, _todos_ los rodados de la flota pueden ir al menos a 100 km/h.
	return this._flota.length>2 && this._flota.all(auto=>auto.velocidadMaxima()>99) 
}
	
capacidadTotalEnColor(un_color){	
//capacidadTotalEnColor(color)`, la cantidad total de personas que puede transportar
// la flota afectada a la dependencia, considerando solamente los rodados del color indicado.
	return flota.filter(auto=>auto.color()==color).sum({auto=>auto.capacidad()})
	}
	method colorDelRodadoMasRapido(){
		return flota.max({auto=>auto.velocidadMaxima()}).color()
		}
	method capacidadFaltante(){
		// que es el resultado de restar, de la cantidad de empleados,
		// la capacidad sumada de los vehículos de la flota.
		return self.empleados() - flota.sum({auto=>auto.capacidad()})
		} 
	method esGrande(){
		// la condición es que la dependencia tenga al menos 40 empleados y 5 rodados.
		return self.empleados()>40 and flota.size()>4
	}
}

// recordamos: los colores con objetos vacíos, no como String
object azul {}
object rojo {}
object verde {}
object blanco{}
object beige{}
object negro{}

class Pedidos{
	var property laDistanciaARecorrer
	var property tiempoMaximo=10
	var property pasajeros
	var property coloresIncompatibles=#{}
	method velocidadRequerida(){return self.laDistanciaARecorrer()/self.tiempoMaximo()}
	method puedeSatisfacer(auto){
		return (auto.velocidadMaxima()> 10+self.velocidadRequerida())and (auto.capacidad()>=self.pasajeros()) and not
		coloresIncompatibles.any({c=>c==auto.color()})
	}
	method acelerar(){
		 self.tiempoMaximo(self.tiempoMaximo-1)
		
		
	}
		// disminuye en uno el tiempo máximo (p.ej. lo hace pasar de 8 horas a 7)
	method relajar(){
		var uno=self.tiempoMaximo()
		
		
			//` que lo aumenta en uno (p.ej. lo hace pasar de 8 horas a 9).
	
	}
}
*/