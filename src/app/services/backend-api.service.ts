import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabModel } from '../models/LabModel';

const apiUrl= 'https://localhost:44380/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getLabList(){
    return this.http.get(apiUrl + 'Lab/GetLabList');
  }

  putApproveLabSlot(bookingId: number, approve: boolean)
  {
    return this.http.put(apiUrl + 'Lab/ApproveLabSlot?BookingId='+bookingId+'&Approved='+approve, null);
  }

  getAdminApprovalSlots()
  {
    return this.http.get(apiUrl + 'Lab/ApprovalSlots');
  }

  getLabSlots(labId: number, startTime: Date, endTime: Date)
  {
    console.log(apiUrl + 'Lab/GetLabSlots?LabId='+labId+'&StartTime='+startTime+'&EndTime='+endTime);
    return this.http.get(apiUrl + 'Lab/GetLabSlots?LabId='+labId+'&StartTime='+startTime+'&EndTime='+endTime);
  }

  bookLabSlot(labModel: LabModel)
  {
    return this.http.post(apiUrl +'Lab/InsertLabSLot', labModel);
  }

}
