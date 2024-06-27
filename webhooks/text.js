const a = {
  meta: {
    test_mode: true,
    event_name: "order_created",
    custom_data: { resumeId: "FOOL" },
    webhook_id: "1b104061-a3ec-41c3-8406-f7f555e24977",
  },
  data: {
    type: "orders",
    id: "2982428",
    attributes: {
      store_id: 96692,
      customer_id: 3113907,
      identifier: "9d975c09-c116-42c3-be70-a220c217f3ec",
      order_number: 966927,
      user_name: "S Akash",
      user_email: "prashanthiakash@gmail.com",
      currency: "SAR",
      currency_rate: "0.26655415",
      tax_name: "",
      tax_rate: 0,
      tax_inclusive: false,
      status: "paid",
      status_formatted: "Paid",
      refunded: false,
      refunded_at: null,
      subtotal: 2000,
      discount_total: 0,
      tax: 0,
      setup_fee: 0,
      total: 2000,
      subtotal_usd: 533,
      discount_total_usd: 0,
      tax_usd: 0,
      setup_fee_usd: 0,
      total_usd: 533,
      subtotal_formatted: "SAR 20.00",
      discount_total_formatted: "SAR 0.00",
      tax_formatted: "SAR 0.00",
      setup_fee_formatted: "SAR 0.00",
      total_formatted: "SAR 20.00",
      first_order_item: {
        id: 2936271,
        order_id: 2982428,
        product_id: 298244,
        variant_id: 427561,
        price_id: 629729,
        product_name: "Premium Plan",
        variant_name: "Default",
        price: 2000,
        quantity: 1,
        created_at: "2024-06-27T16:25:37.000000Z",
        updated_at: "2024-06-27T16:25:37.000000Z",
        test_mode: true,
      },
      urls: {
        receipt:
          "https://app.lemonsqueezy.com/my-orders/9d975c09-c116-42c3-be70-a220c217f3ec?signature=b077bbba50e2582465e252fe9258c996bb1344c6d2cb416c5b8725a748fbc450",
      },
      created_at: "2024-06-27T16:25:35.000000Z",
      updated_at: "2024-06-27T16:25:37.000000Z",
      test_mode: true,
    },
    relationships: {
      store: {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2982428/store",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/store",
        },
      },
      customer: {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2982428/customer",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/customer",
        },
      },
      "order-items": {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2982428/order-items",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/order-items",
        },
      },
      subscriptions: {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2982428/subscriptions",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/subscriptions",
        },
      },
      "license-keys": {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2982428/license-keys",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/license-keys",
        },
      },
      "discount-redemptions": {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2982428/discount-redemptions",
          self: "https://api.lemonsqueezy.com/v1/orders/2982428/relationships/discount-redemptions",
        },
      },
    },
    links: { self: "https://api.lemonsqueezy.com/v1/orders/2982428" },
  },
};
