import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let constellations = [
      {
        id: 1,
        agencyName: 'XYZ Placements',
        constellationName: 'Acme',
        constellationStartDate: '11/28/2014',
        hubHomePrimaryContactEmail: 'JaneD@outlook.com',
        hubHomePrimaryContactName: 'Jane Doe',
        hubHomePrimaryContactPhone: '(123) 456-7890',
        hubHomeStartDate: '03/01/2015',
        lastUpdated: '06/03/2016',
        numberOfDependentYouth: 9,
        numberOfExistingLicensedHomesAdded: 2,
        numberOfFullSiblingSets: 3,
        numberOfFullSiblingSetsSinceLaunch: 6,
        numberOfNewlyLicensedHomesAdded: 0,
        numberOfNonDependentYouth: 7,
        numberOfRecruitingEvents: 3,
        numberOfSafetyAllegations: 0,
        numberOfSateliteHomes: 4,
        reportStatus: 'Not submitted',
        freeOfCPSIssues: 'Yes'
      },
      {
        id: 2,
        agencyName: 'ABC 4 Kids',
        constellationName: 'Contoso',
        constellationStartDate: '11/28/2014',
        hubHomePrimaryContactEmail: 'JaneD@outlook.com',
        hubHomePrimaryContactName: 'Jane Doe',
        hubHomePrimaryContactPhone: '(123) 456-7890',
        hubHomeStartDate: '03/01/2015',
        lastUpdated: '06/03/2016',
        numberOfDependentYouth: 9,
        numberOfExistingLicensedHomesAdded: 2,
        numberOfFullSiblingSets: 3,
        numberOfFullSiblingSetsSinceLaunch: 6,
        numberOfNewlyLicensedHomesAdded: 0,
        numberOfNonDependentYouth: 7,
        numberOfRecruitingEvents: 3,
        numberOfSafetyAllegations: 0,
        numberOfSateliteHomes: 4,
        reportStatus: 'Not submitted',
        freeOfCPSIssues: 'Yes'
      },
    ]
    return { constellations };
  }
}