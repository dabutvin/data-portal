type TriString = 
    "Yes"
    | "No"
    | "N/A";

export class Activity {
    activityType: string;
    totalHours: number;
    numActivities: number;      // Number of activities
    familiesAttended: number;   // Number of satellite families that attended
    commAttended: number;       // No. of attending community members
    agencyAttended: TriString;  // This field should only ever take the values
                                    // "Yes", "No", or "N/A" 
    notes: string;              // Additional notes and details
}