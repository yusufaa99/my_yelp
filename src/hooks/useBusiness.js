import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getBusiness } from "../graphql/queries";

export function useBusiness(businessId) {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const { data } = await API.graphql(graphqlOperation(getBusiness, { id: businessId }));
        setBusiness(data.getBusiness);
      } catch (error) {
        console.error("Error fetching business:", error);
      } finally {
        setLoading(false);
      }
    }
    if (businessId) fetchBusiness();
  }, [businessId]);

  return { business, loading };
}
