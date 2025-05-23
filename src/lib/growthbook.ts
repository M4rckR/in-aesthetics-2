// lib/growthbook.ts
'use client';

import { GrowthBook } from "@growthbook/growthbook";
import { autoAttributesPlugin } from "@growthbook/growthbook/plugins";

export const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-L64BLdZhLEhTy4O",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // Aquí es donde enviarías un evento a tu proveedor de analytics
    console.log("Experimento Visto", {
      experimentId: experiment.key,
      variationId: result.key
    });
    
    // Para GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'experiment_viewed', {
        experiment_id: experiment.key,
        variation_id: result.key
      });
    }
  },
  plugins: [ autoAttributesPlugin() ],
});