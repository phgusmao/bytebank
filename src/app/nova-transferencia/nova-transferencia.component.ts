import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir: EventEmitter<any> = new EventEmitter();

  @Output() valoresComErro: EventEmitter<any> = new EventEmitter();

  valor: any;
  destino: any;

  transferir() {
    console.log('Nova transferência solicitada');
    const valorEmitir: any = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
    this.ehValido(valorEmitir.valor);
    console.log(this.valor);
  }

  private ehValido(value: any){
    const valido = value > 0;
    const msgErro = ('Informe um valor válido.');
    if(!valido) {
      this.valoresComErro.emit(msgErro);
    }
    return valido;
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
