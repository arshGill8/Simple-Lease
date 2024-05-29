import { configureStore } from "@reduxjs/toolkit";
import { landlordNameReducer } from "../features/name/landlordName";
import { tenantNameReducer } from "../features/name/tenantName";
import { contactInfoReducer } from "../features/contactInfo";
import { depositInfoReducer } from "../features/depositInfo";
import { leaseTermInfoReducer } from "../features/leaseTermInfo";
<<<<<<< HEAD
import { rentalUnitReducer } from "../features/rentalUnit";
=======
import { propertyInfoReducer } from "../features/propertyInfo";
>>>>>>> 932f9ad (hi)
import { utilityInfoReducer } from "../features/utilityInfo";
import { tenantSignatureReducer } from "../features/signature/tenantSignature";
import { landlordSignatureReducer } from "../features/signature/landlordSignature";
import { currentPageReducer } from "../features/currentPage";
const store = configureStore({
  reducer: {
    currentPage: currentPageReducer,
    landlordName: landlordNameReducer,
    tenantName: tenantNameReducer,
    tenantSignature: tenantSignatureReducer,
    landlordSignature: landlordSignatureReducer,
    contactInfo: contactInfoReducer,
    depositInfo: depositInfoReducer,
    leaseTermInfo: leaseTermInfoReducer,
<<<<<<< HEAD
    rentalUnit: rentalUnitReducer,
=======
    propertyInfo: propertyInfoReducer,
>>>>>>> 932f9ad (hi)
    utilityInfo: utilityInfoReducer,
  },
});

export default store;
