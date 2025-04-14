import type { NextConfig } from "next";

const {
  NEXT_PUBLIC_KITCHEN_ZONE_URL,
  NEXT_PUBLIC_ORDERS_ZONE_URL,
  NEXT_PUBLIC_STOCK_ZONE_URL,
  NEXT_PUBLIC_ADMIN_ZONE_URL,
  NEXT_PUBLIC_COMPANY_ZONE_URL
} = process.env

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      //#region - Proxy | Kitchen
      {
        source: '/kitchen',
        destination: `${NEXT_PUBLIC_KITCHEN_ZONE_URL}`
      },
      {
        source: '/kitchen/:path+',
        destination: `${NEXT_PUBLIC_KITCHEN_ZONE_URL}/:path+`
      },
      {
        source: '/kitchen-static/_next/:path*',
        destination: `${NEXT_PUBLIC_KITCHEN_ZONE_URL}/kitchen-static/_next/:path*`,
      },
      //#endregion - Proxy | Kitchen

      //#region - Proxy | Orders
      {
        source: '/orders',
        destination: `${NEXT_PUBLIC_ORDERS_ZONE_URL}`
      },
      {
        source: '/orders/:path+',
        destination: `${NEXT_PUBLIC_ORDERS_ZONE_URL}/:path+`
      },
      {
        source: '/orders-static/_next/:path*',
        destination: `${NEXT_PUBLIC_ORDERS_ZONE_URL}/orders-static/_next/:path*`,
      },
      //#endregion - Proxy | Orders

      //#region - Proxy | Stock
      {
        source: '/stock',
        destination: `${NEXT_PUBLIC_STOCK_ZONE_URL}`
      },
      {
        source: '/stock/:path+',
        destination: `${NEXT_PUBLIC_STOCK_ZONE_URL}/:path+`
      },
      {
        source: '/stock-static/_next/:path*',
        destination: `${NEXT_PUBLIC_STOCK_ZONE_URL}/stock-static/_next/:path*`,
      },
      //#endregion - Proxy | Stock

      //#region - Proxy | Admin
      {
        source: '/admin',
        destination: `${NEXT_PUBLIC_ADMIN_ZONE_URL}`
      },
      {
        source: '/admin/:path+',
        destination: `${NEXT_PUBLIC_ADMIN_ZONE_URL}/:path+`
      },
      {
        source: '/admin-static/_next/:path*',
        destination: `${NEXT_PUBLIC_ADMIN_ZONE_URL}/admin-static/_next/:path*`,
      },
      //#endregion - Proxy | Admin

      //#region - Proxy | Company
      {
        source: '/company',
        destination: `${NEXT_PUBLIC_COMPANY_ZONE_URL}`
      },
      {
        source: '/company/:path+',
        destination: `${NEXT_PUBLIC_COMPANY_ZONE_URL}/:path+`
      },
      {
        source: '/company-static/_next/:path*',
        destination: `${NEXT_PUBLIC_COMPANY_ZONE_URL}/company-static/_next/:path*`,
      }
      //#endregion - Proxy | Company
    ]
  }
};

export default nextConfig;
