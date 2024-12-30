import { Component, Input, OnInit} from '@angular/core';
import { JobService  } from '../../services/job.service';
import { Job } from '../../../Job';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from '../job-listing/job-listing.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-job-listins',
  imports: [CommonModule,JobListingComponent, RouterModule],
  templateUrl: './job-listins.component.html',
  styleUrl: './job-listins.component.css'
})
export class JobListinsComponent {

  @Input() limit: number = 0;
  @Input() showButton: boolean = false;
  jobs: Job[] = []

  constructor(private jobService: JobService){}

  ngOnInit(): void{
    this.jobService.getJob().subscribe((jobs) => this.jobs = jobs);
    console.log(this.jobs)
  }

}
