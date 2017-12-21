import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loja-header',
  templateUrl: './loja-header.component.html',
  styleUrls: ['./loja-header.component.css']
})
export class LojaHeaderComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() color : string = '';
  @Input() link : string = '';
  @Input() icone : string = '';
  @Input() nomeBotao : string = '';

  constructor() { }

  ngOnInit() {
  }

}
