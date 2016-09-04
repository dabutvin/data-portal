export class Constellation {
    AgencyName: string;
    ConstellationName: string;
    ConstellationStartDate: string;
    HubHomePrimaryContactEmail: string;
    HubHomePrimaryContactName: string;
    HubHomePrimaryContactPhone: string;
    HubHomeStartDate: string;
    LastUpdated: string;
    NumberOfDependentYouth: number;
    NumberOfExistingLicensedHomesAdded: number;
    NumberOfFullSiblingSets: number;
    NumberOfFullSiblingSetsSinceLaunch: number;
    NumberOfNewlyLicensedHomesAdded: number;
    NumberOfNonDependentYouth: number;
    NumberOfRecruitingEvents: number;
    NumberOfSafetyAllegations: number;
    NumberOfSateliteHomes: number;
    ReportStatus: string;
    FreeOfCPSIssues: string;


    constructor(data: any) {
        this.AgencyName = data.AgencyName;
        this.ConstellationName = data.ConstellationName;
        this.ConstellationStartDate = data.ConstellationStartDate;
        this.HubHomePrimaryContactEmail = data.HubHomePrimaryContactEmail;
        this.HubHomePrimaryContactName = data.HubHomePrimaryContactName;
        this.HubHomePrimaryContactPhone = data.HubHomePrimaryContactPhone;
        this.HubHomeStartDate = data.HubHomeStartDate;
        this.LastUpdated = data.LastUpdated;
        this.NumberOfDependentYouth = data.NumberOfDependentYouth;
        this.NumberOfExistingLicensedHomesAdded = data.NumberOfExistingLicensedHomesAdded;
        this.NumberOfFullSiblingSets = data.NumberOfFullSiblingSets;
        this.NumberOfFullSiblingSetsSinceLaunch = data.NumberOfFullSiblingSetsSinceLaunch;
        this.NumberOfNewlyLicensedHomesAdded = data.NumberOfNewlyLicensedHomesAdded;
        this.NumberOfRecruitingEvents = data.NumberOfRecruitingEvents;
        this.NumberOfSafetyAllegations = data.NumberOfSafetyAllegations;
        this.NumberOfSateliteHomes = data.NumberOfSateliteHomes;
        this.ReportStatus = data.ReportStatus;
        this.NumberOfNonDependentYouth = data.NumberOfNonDependentYouth;
        this.FreeOfCPSIssues = data.FreeOfCPSIssues === 1 ? 'Yes': 'No';
    }
}
