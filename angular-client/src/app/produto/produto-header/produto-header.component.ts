import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-header',
  templateUrl: './produto-header.component.html',
  styleUrls: ['./produto-header.component.css']
})
export class ProdutoHeaderComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() color : string = '';
  @Input() link : string = '';
  @Input() icone : string = '';
  @Input() nomeBotao : string = '';

  constructor() { }

  ngOnInit() {
  }

}
