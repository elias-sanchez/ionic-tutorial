import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {

  place: Place

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      // redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    })
  }

}
