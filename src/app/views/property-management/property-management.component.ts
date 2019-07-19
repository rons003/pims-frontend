import { Component, OnInit } from '@angular/core';
// NG BOOTSTRAP MODAL
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  detailsModalOpen(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  projectModalOpen(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  projectSelectChangeEvent(value: string, content?: any) {
    if (value === 'New') {
      this.projectModalOpen(content);
    }
  }
}
