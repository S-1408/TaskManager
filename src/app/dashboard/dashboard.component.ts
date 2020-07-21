import { DashboardService } from './../dashboard.service';

import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  UserName: string;
  NoOfTeamMember: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingprojects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  Today: Date;

  constructor(private dashboardService: DashboardService)
  { }
  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.UserName = 'SONAM VERMA',
    this.NoOfTeamMember = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingprojects = .2;
    this.AvailableFunds = 2113507;
    this.ProjectCost = 96788;
    this.CurrentExpenditure = 52536;
    this.Today= new Date();
    this.Clients = [
      'ABC Infotech Ltd', 'DEF Software Solutions', 'GHI Industries'
    ];
    this.Projects = ['Project A', 'Project B', 'Project C'];
    // call teamMembersummary using array
    // this.TeamMembersSummary = [
    //   {Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
    //   {Region: 'West ', TeamMembersCount: 14, TemporarilyUnavailableMembers: 8},
    //   {Region: 'South', TeamMembersCount: 32, TemporarilyUnavailableMembers: 1},
    //   {Region: 'North', TeamMembersCount: 23, TemporarilyUnavailableMembers: 6},
    // ];

    // call teamMembersummary by using service in ng
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
     {Region: 'East', Members: [
     { ID: 1 , Name: 'Ford  ', Status: 'Availavble '},
      { ID: 2 , Name: 'Miller' , Status: 'Availavble' },
      { ID: 3 , Name: 'Jones ', Status: 'Busy'},
      { ID: 4 , Name: ' John ', Status: 'Busy'}]
    },
    {Region: 'West', Members: [
      { ID: 1 , Name: 'Ford  ', Status: 'Availavble '},
       { ID: 2 , Name: 'Miller' , Status: 'Availavble' },
       { ID: 3 , Name: 'Jones ', Status: 'Busy'},
       { ID: 4 , Name: ' John ', Status: 'Busy'}]
     },
     {Region: 'South', Members: [
      { ID: 1 , Name: 'Ford  ', Status: 'Availavble '},
       { ID: 2 , Name: 'Miller' , Status: 'Availavble' },
       { ID: 3 , Name: 'Jones ', Status: 'Busy'},
       { ID: 4 , Name: ' John ', Status: 'Busy'}]
     },
     {Region: 'North', Members: [
      { ID: 1 , Name: 'Ford  ', Status: 'Availavble '},
       { ID: 2 , Name: 'Miller' , Status: 'Availavble' },
       { ID: 3 , Name: 'Jones ', Status: 'Busy'},
       { ID: 4 , Name: ' John ', Status: 'Busy'}]
     }
    ];

    for (let i = 2019; i > 2010; i--){
      this.Years.push(i);
    }


  }
  onProjectChange($event){
if($event.target.innerHTML === 'Project A'){
  this.ProjectCost        = 289548;
  this.CurrentExpenditure = 676764;
  this.AvailableFunds     = 76845;
}else if ($event.target.innerHTML === 'Project B'){
  this.ProjectCost = 76586;
  this.CurrentExpenditure = 8676766;
  this.AvailableFunds  = 566765;
}else if ($event.target.innerHTML === 'Project C'){
   this.ProjectCost = 98876;
   this.CurrentExpenditure = 45676;
   this.AvailableFunds   = 9798;
}
  }

}
