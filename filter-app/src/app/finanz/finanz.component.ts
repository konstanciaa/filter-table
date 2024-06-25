import { Component, OnInit } from '@angular/core';
import { FinanzService } from '../finanz.service';

@Component({
  selector: 'app-finanz',
  templateUrl: './finanz.component.html',
  styleUrl: './finanz.component.css'
})
export class FinanzComponent implements OnInit {
  finanz: any[] = [];
  selectedType: string = '';

  constructor(private finanzService: FinanzService) { }

  ngOnInit(): void {
    this.getFinanz();
  }

  getFinanz(): void {
    this.finanzService.getFinanz(this.selectedType).subscribe(data => {
      this.finanz = data;
    });
  }

  onTypeChange(event: any): void {
    this.selectedType = event.target.value;
    this.getFinanz();
  }
}
