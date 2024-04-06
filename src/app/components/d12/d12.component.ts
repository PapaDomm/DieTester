import { Component } from '@angular/core';

@Component({
  selector: 'app-d12',
  standalone: true,
  imports: [],
  templateUrl: './d12.component.html',
  styleUrl: './d12.component.scss'
})
export class D12Component {

  constructor() {}
  die: HTMLElement | undefined;
  sides: number = 12;
  initialSide: number = 1;
  lastFace: number | undefined; 
  timeoutId: any;
  transitionDuration: number = 500;
  animationDuration: number = 1000;

  ngOnInit(): void {
    this.die = document.querySelector('.die1') as HTMLElement;

    document.querySelectorAll('.randomize, .die1').forEach(element => {
      element.addEventListener('click', () => {
        event?.preventDefault();
        this.die!.classList.add('rolling');
        clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(() => {
          this.die!.classList.remove('rolling');
          this.rollTo(this.randomFace().toString());
        }, this.animationDuration);
      });
    });
  }

  randomFace(): number {
    let face = Math.floor((Math.random() * this.sides)) + this.initialSide;
    this.lastFace = face === 0 ? 10 : face;
    return face;
  }

  rollTo(face: string | null): void {
    clearTimeout(this.timeoutId);
    this.die!.setAttribute('data-face', face || '');
  }
}
