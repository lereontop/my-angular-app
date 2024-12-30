import { Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import { Job } from '../../../Job';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  imports: [RouterModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {
  @Input() job: Job = {} as Job;
}
