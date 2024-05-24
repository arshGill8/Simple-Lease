import { LandlordName } from "./landlordName";
import { TenantName } from "./tenantName";

export default function Name() {
  return (
    <div class="w-full">
      <LandlordName />
      <TenantName />
    </div>
  );
}
