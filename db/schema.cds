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

entity BadgeDataCurrentMonth {
    key VendorID: String;
    key ContractorID: String;
        BadgeDate: Date;
        InferredTime: Decimal(5,2);
}

entity BadgeDataHistory {
    key VendorID: String;
    key ContractorID: String;
        BadgeDate: Date;
        InferredTime: Decimal(5,2); 
}

entity FieldGlassCurrentMonth {
    key VendorID: String;
    key ContractorID: String;
        WorkDate: Date;
        HoursApproved: Decimal(5,2); 
        Approved: Boolean;
}

entity FieldGlassHistory {
    key VendorID: String;
    key ContractorID: String;
        WorkDate: Date;
        HoursSubmitted: Decimal(5,2); 
        Approved: Boolean;
}
entity SESData{
    key VendorID: String;
    key ContractorID: String;
        WorkDate: Date;
        RatePerHour: Decimal(5,2);

}
entity MasterData {
    key ContractorID: String;
    key VendorID: String;
    key WorkDate: Date;
        RatePerHour: Decimal(5,2);
        Plant: String;
        CompCode: String;
        PO: String;
        FArea: String;
}
@cds.persistence.skip : true
entity AccrualsData : managed {
    key vendorID: String;
        contractorID: String;
}