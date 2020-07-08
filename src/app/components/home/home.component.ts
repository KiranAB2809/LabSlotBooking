import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { LabList, LabModel, ApprovalList } from '../../models/LabModel';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Lab {
  value: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;
  userId: string;
  selectedLab: number;
  startTime: Date;
  endTime: Date;
  emailId: string;
  bookHidden = true;
  labs: LabList[] = [];
  labModel: LabModel;
  approvalSlot: ApprovalList[] = [];
  displayedColumns: string[] = ['bookingId', 'userName', 'labName'];

  isAdmin: boolean = true;

  constructor(private apiService: BackendApiService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getLabList();
    this.getApprovalSlots();
  }


  getLabList() {
    this.apiService.getLabList().subscribe(data => {
      for (const d of (data as any)) {
        this.labs.push(d);
      }
    });
  }

  getApprovalSlots() {
    this.apiService.getAdminApprovalSlots().subscribe(data => {
      for (const d of (data as any)) {
        this.approvalSlot.push(d);
      }
    });
    console.log(this.approvalSlot);
  }

  BookSlot() {
    console.log("Book Slot", this.userName, this.endTime, this.selectedLab, this.emailId);
    this.labModel = {
      UserId: this.userId,
      UserName: this.userName,
      Email: this.emailId,
      EndTime: this.endTime,
      LabId: this.selectedLab,
      StartTime: this.startTime,
    }
    console.log(this.labModel);
    if (this.validateForm(this.labModel)) {
      this.apiService.bookLabSlot(this.labModel).subscribe(
        resp => {
          console.log(resp);          
        }
      );
      this.userName = "";
      this.userId = "";
      this.emailId = "";
      this.bookHidden = true;
    }
    else {
      this._snackBar.open("Invalid Form", null, {
        duration: 3000,
      });
    }

  }

  approve(approve: boolean, id: number) {
    this.apiService.putApproveLabSlot(id, approve).subscribe(data => {
      console.log(data);
    });
  }

  CheckSlot() {
    console.log("Check Slot");
    this.labModel = {
      UserId: this.userId,
      UserName: this.userName,
      Email: this.emailId,
      EndTime: this.endTime,
      LabId: this.selectedLab,
      StartTime: this.startTime,
    }

    if (this.validateForm(this.labModel)) {
      this.apiService.getLabSlots(this.labModel.LabId, this.labModel.StartTime, this.labModel.EndTime).subscribe(
        resp => {
          if (resp == true) {
            this.bookHidden = false;
          }
          else {
            this._snackBar.open("This Slot is not Available", null, {
              duration: 3000,
            });
          }
        }
      )
    }
    else {
      this._snackBar.open("Invalid Form", null, {
        duration: 3000,
      });
    }

  }

  validateForm(labModel: LabModel) {
    if (labModel.StartTime > labModel.EndTime) {
      return false;
    }
    else if (labModel.Email == undefined || labModel.EndTime == undefined || labModel.LabId == undefined || labModel.StartTime == undefined || labModel.UserId == undefined || labModel.UserName == undefined) {
      return false;
    }
    else
      return true;
  }

  resetData() {
    this.userName = "";
    this.userId = "";
    this.emailId = "";
    this.bookHidden = true;
  }

}
