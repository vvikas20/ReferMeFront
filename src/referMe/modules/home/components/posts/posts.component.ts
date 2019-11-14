import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PostDetail, PostFilter } from '../../models/user-post.model';
import { JobpostService } from '../../services/jobpost.service';
import { AppUser } from 'src/referMe/core/models/app-user.model';
import { AlertService } from 'src/referMe/core/helper/alert.service';
import { CompanyService } from '../../services/company.service';
import { LocationService } from '../../services/location.service';
import { ModalDirective } from 'ngx-bootstrap';
import { SearchParameter } from '../../models/search-parameter.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'referMe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @ViewChild('jobPostModal') jobPostModal: ModalDirective;

  postDetail: PostDetail;

  totallFilteredPostCount: number;
  myPosts: Array<PostDetail>;

  companies: Array<string>;
  companyMaster: Array<{ companyId: number, companyName: string }>;

  locations: Array<string>;
  locationMaster: Array<{ locationID: number, city: string, state: string }>

  experienceOptions: { label: string; value: number }[];

  postFilter: PostFilter;


  constructor(private alertService: AlertService,
    private datePipe: DatePipe,
    private jobpostService: JobpostService,
    private companyService: CompanyService,
    private locationService: LocationService) {

  }

  ngOnInit() {

    this.postFilter = new PostFilter();
    this.postDetail = new PostDetail();

    this.totallFilteredPostCount = 0;
    this.myPosts = [];
    this.prepareOptions();

    this.fetchPosts(new SearchParameter());

    this.fetchCompanies();
    this.fetchLocations();
  }

  prepareOptions() {
    this.experienceOptions = [];
    let i: number = 0;
    while (i < 21) {
      this.experienceOptions.push({ label: i.toString(), value: i });
      i++;
    }

    this.postFilter.minExp = 0;
    this.postFilter.maxExp = 0;
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

  fetchPosts(searchParameter: SearchParameter) {

    if (this.postFilter.maxExp > 0 && this.postFilter.minExp > this.postFilter.maxExp) {
      this.alertService.info('INFO', 'Minimum Experience can not be greater than Maximum Experience');
      return;
    }

    if (this.postFilter.keywords.length > 0) searchParameter.Filters.push({ Field: 'keywords', Value: this.postFilter.keywords.join('##') });
    if (this.postFilter.company != '') searchParameter.Filters.push({ Field: 'company', Value: this.postFilter.company });
    if (this.postFilter.location != '') searchParameter.Filters.push({ Field: 'location', Value: this.postFilter.location });
    if (this.postFilter.minExp > 0) searchParameter.Filters.push({ Field: 'minExp', Value: this.postFilter.minExp });
    if (this.postFilter.maxExp > 0) searchParameter.Filters.push({ Field: 'maxExp', Value: this.postFilter.maxExp });

    // this.totallFilteredPostCount = 0;
    this.myPosts = [];

    this.jobpostService.getMyPosts(searchParameter).subscribe(next => {
      this.totallFilteredPostCount = next.TotallItem;
      next.Items.forEach(element => {
        this.myPosts.push({
          postID: element.PostID,
          userID: element.UserID,
          company: element.Company,
          position: element.Position,
          minExp: element.MinExp,
          maxExp: element.MaxExp,
          location: element.Location,
          keywords: element.Keywords,
          contact: element.Contact,
          description: element.Description,
          postedOn: this.datePipe.transform(new Date(element.PostedOn), 'MMM d, y, h:mm:ss a')
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
    else if (this.postFilter.maxExp > 0 && this.postFilter.minExp > this.postFilter.maxExp) {
      this.alertService.info('INFO', 'Minimum Experience can not be greater than Maximum Experience');
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
        this.fetchPosts(new SearchParameter());
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

    console.log('paginate', event);

    let searchParam = new SearchParameter();
    searchParam.Page = event.page + 1;
    searchParam.Rows = event.rows;

    this.fetchPosts(searchParam);
  }

  refreshPosts() {
    this.fetchPosts(new SearchParameter());
  }
}
