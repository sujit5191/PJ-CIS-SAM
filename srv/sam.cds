using sp.sam as sp from '../db/schema';

service CatalogService {
    entity AccrualsData as projection on sp.AccrualsPastData;
}