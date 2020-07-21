import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // constructor() { }
  // when we want to add service globally use the add service in root
getTeamMembersSummary(): any[]
 { let TeamMembersSummary = [
       {Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
       {Region: 'West ', TeamMembersCount: 14, TemporarilyUnavailableMembers: 8},
       {Region: 'South', TeamMembersCount: 32, TemporarilyUnavailableMembers: 1},
       {Region: 'North', TeamMembersCount: 23, TemporarilyUnavailableMembers: 6},
     ];
   return TeamMembersSummary;
  }

}
