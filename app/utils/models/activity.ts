let AttendedEnum = {
    YES: 'Yes',
    NO: 'No',
    NA: 'N/A'
};

export class Activity {
    activityType: string;
    totalHours: number;
    numActivities: number;      // Number of activities
    familiesAttended: number;   // Number of satellite families that attended
    commAttended: number;       // No. of attending community members
    agencyAttended: string;  // This field should only ever take the values
                                    // "Yes", "No", or "N/A"
    notes: string;              // Additional notes and details

    constructor(data: any) {
        this.activityType = data.Activity;
        this.totalHours = data.TotalHours;
        this.numActivities = data.NumberOfActivities;
        this.commAttended = data.NumberOfCommunityAttended;
        this.familiesAttended = data.NumberOfSatelliteFamiliesAttended;
        this.agencyAttended = this.getAttendedStatus(data.HostAgencyAttended);
        this.notes = data.Notes;
    }

    getAttendedStatus(status: boolean) {
        if (status) {
            return AttendedEnum.YES;
        } else if (status === false) {
            return AttendedEnum.NO;
        } else {
            return AttendedEnum.NA;
        }
    }
}
