namespace sp.sam ;

using {
    managed,
    cuid,
    User
} from '@sap/cds/common';

entity AccrualsPastData : managed {
    key period: String ;
        acchours: Decimal(10,2);
        accamount: Decimal(23,2);
}

@cds.persistence.skip : true
entity AccrualsData : managed {
    key vendorID: String;
        contractorID: String;
}