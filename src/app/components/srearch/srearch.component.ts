import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-srearch',
  templateUrl: './srearch.component.html',
  styleUrls: ['./srearch.component.css']
})
export class SrearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    if (value.length>0) {
      this.router.navigateByUrl(`/search/${value}`)
    }
  }

}
