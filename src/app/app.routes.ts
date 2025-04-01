import { Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { PackagesComponent } from './packages/packages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AttractionComponent } from './attraction/attraction.component';
import { WaterparkComponent } from './waterpark/waterpark.component';
import { AdventureComponent } from './adventure/adventure.component';
import { SchoolComponent } from './school/school.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { LuxuryComponent } from './luxury/luxury.component';
import { DestinationWeddingComponent } from './destination-wedding/destination-wedding.component';
import { CorporateComponent } from './corporate/corporate.component';

export const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'home',component:HomeComponent},
	{path:'packages',component:PackagesComponent},
	{path:'about',component:AboutComponent},
	{path:'contact',component:ContactComponent},
	{path:'rules',component:RulesComponent},
	{path:'attraction',component:HomeComponent},
	{path:'hospitality',component:HomeComponent},
	{path:'waterpark',component:WaterparkComponent},
	{path:'adventure',component:AdventureComponent},
	{path:'school',component:SchoolComponent},
	{path:'cuisine',component:CuisineComponent},
	{path:'luxury',component:LuxuryComponent},
	{path:'destination-wedding', component:DestinationWeddingComponent},
	{path:'corporate',component:CorporateComponent},
];

