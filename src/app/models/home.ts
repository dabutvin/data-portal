type HomeType = "Hub" | "Satellite";
export class Home {
    homeID: number;
    homeType: HomeType;             // Type of home (see class above)
    lName: string;                  // Last name of family in house
    zipCode: number;
    numNonDepYouth: number;         // Number of non-dependent youths
    numDepYouth: number;            // Number of dependent (foster) youths
    startDate: Date;
    plannedRespiteHours: number;    // Number of planned respite hours
    crisisRespiteHours: number;     // Number of crisis respite hours
    numCrisisSupports: number;      // Number of crisis supports
    numTransports: number;          // Number of transports
}
