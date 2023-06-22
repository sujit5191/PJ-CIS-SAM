using sp.sam as sp from '../db/schema';

service CatalogService {
    entity AccrualsData as projection on sp.AccrualsPastData;
    entity MasterData as projection on sp.MasterData;
    entity SESData as projection on sp.SESData;
    entity BadgeDataCurrentMonth as projection on sp.BadgeDataCurrentMonth;
    entity BadgeDataHistory as projection on sp.BadgeDataHistory;
}