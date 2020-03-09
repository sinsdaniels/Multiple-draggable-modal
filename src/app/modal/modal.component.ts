import { Component, OnInit, Input} from '@angular/core';
import { Itabula } from '../tabula/tabula.component';
import interact from 'interactjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public laukuNosaukumi: Array<String>;
  @Input() public obj: any;
  @Input() public cfg : Itabula;

  public modalId: number;
  public targetId: number = 0;
  public modalTitle: string;s
  constructor() {
    interact('.modalDragable').draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          //restriction: 'parent',
          endOnly: false
        })
      ],
      autoScroll: true,
      onmove: dragMoveListener,
    })

    function dragMoveListener(event) {
      const target = event.target
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

      target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
   }

  ngOnInit() {
  }

}
