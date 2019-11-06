import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PostDetail } from '../../models/user-post.model';
import { JobpostService } from '../../services/jobpost.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';
import { CompanyService } from '../../services/company.service';
import { LocationService } from '../../services/location.service';
import { ModalDirective } from 'ngx-bootstrap';


@Component({
  selector: 'referMe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @ViewChild('jobPostModal') jobPostModal: ModalDirective;

  postDetail: PostDetail;
  myPosts: Array<PostDetail>;

  selectedExperience: any;
  experience: any[];


  companies: Array<string>;
  companyMaster: Array<{ companyId: number, companyName: string }>;

  locations: Array<string>;
  locationMaster: Array<{ locationID: number, city: string, state: string }>

  selectedSalary: any;
  salary: any[];

  experienceOptions: { label: string; value: number }[];

  constructor(private alertService: AlertService,
    private jobpostService: JobpostService,
    private companyService: CompanyService,
    private locationService: LocationService) {

  }

  ngOnInit() {
    this.preparePostFilter();
    this.postDetail = new PostDetail();
    this.myPosts = [];
    this.prepareOptions();

    this.fetchMyPosts();

    this.fetchCompanies();
    this.fetchLocations();
  }

  preparePostFilter() {
    this.experience = [];
    let i: number = 0;
    while (i < 21) {
      this.experience.push({ label: i.toString(), value: i });
      i++;
    }

    this.salary = [];
    let j: number = 0;
    while (j < 21) {
      this.salary.push({ label: j.toString(), value: j });
      j++;
    }

    this.selectedExperience = 0;
    this.selectedSalary = 0;
  }

  prepareOptions() {
    this.experienceOptions = [];
    let i: number = 0;
    while (i < 21) {
      this.experienceOptions.push({ label: i.toString(), value: i });
      i++;
    }
  }

  fetchLocations() {
    this.locations = [];
    this.locationMaster = [];
    this.locationService.getLocations().subscribe(
      next => {
        next.forEach(location => {
          this.locationMaster.push({
            locationID: location.LocationID,
            city: location.City,
            state: location.State
          });
        });
      },
      error => {

      },
      () => { });
  }

  fetchCompanies() {
    this.companies = [];
    this.companyMaster = [];
    this.companyService.getCompanies().subscribe(
      next => {
        next.forEach(company => {
          this.companyMaster.push({
            companyId: company.CompanyID,
            companyName: company.CompanyName
          });
        });
      },
      error => {

      },
      () => { });
  }


  searchCompany(event) {
    this.companies = this.companyMaster.filter(c => c.companyName.toUpperCase().startsWith(event.query.toUpperCase())).map(c => c.companyName)
  }

  searchLocation(event) {
    this.locations = this.locationMaster.filter(c => c.city.toUpperCase().startsWith(event.query.toUpperCase())).map(c => c.city)
  }

  fetchMyPosts() {
    this.myPosts = [];
    this.jobpostService.getMyPosts().subscribe(next => {
      next.forEach(element => {
        this.myPosts.push({
          postID: element.PostID,
          userID: element.UserID,
          company: element.Company,
          position: element.Position,
          minExp: element.MinExp,
          maxExp: element.MaxExp,
          location: element.Location,
          contact: element.Contact,
          description: element.Description
        });
      });
    },
      error => {

      },
      () => { });
  }

  postJob() {

    if (this.postDetail.position.trim() == '') {
      this.alertService.info('INFO', 'Position can not be empty');
      return;
    }
    else if (this.postDetail.company.trim() == '') {
      this.alertService.info('INFO', 'Copmany can not be empty');
      return;
    }
    else if (this.postDetail.location.trim() == '') {
      this.alertService.info('INFO', 'Location can not be empty');
      return;
    }

    this.jobpostService.createPost(this.postDetail).subscribe(
      next => {
        this.alertService.success('Succes', 'Post created successfully');
        this.jobPostModal.hide();
        this.fetchMyPosts();
      },
      error => {

      },
      () => { });
  }

  openModal() {
    this.postDetail = new PostDetail();
    this.jobPostModal.show();
  }

  hideModal() {
    this.jobPostModal.hide();
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
