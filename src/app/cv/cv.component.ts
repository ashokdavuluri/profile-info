import { Component, OnInit } from '@angular/core';
import { DataSourseService } from '../domain/services/data-sourse.service';
import { ProjectModel } from '../domain/models/projects-model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit {
  dataSourseService: DataSourseService;
  projectsData: ProjectModel;

  constructor(dataSourseService: DataSourseService) {
    this.dataSourseService = dataSourseService;
   }

  ngOnInit(): void {
    this.dataSourseService.getProjectsPageData().then(data => {
      data.projects = data.projects.filter(f =>f.isActive === true);
      this.projectsData = data;
    })
  }

}
