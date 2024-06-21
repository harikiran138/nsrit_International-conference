__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "apiEndpoint": () => ( /* binding */ apiEndpoint)
    /* harmony export */
});
var apiEndpoint = {
    meetings: {
        meetingsList: "/wp-json/timetics/v1/appointments",
        meeting: "/wp-json/timetics/v1/appointments",
        createMeeting: "/wp-json/timetics/v1/appointments",
        deleteMeeting: "/wp-json/timetics/v1/appointments",
        duplicateMeeting: "/wp-json/timetics/v1/appointments/:id/duplicate",
        search: "wp-json/timetics/v1/appointments/search",
        filterMeeting: "wp-json/timetics/v1/appointments/filter"
    },
    staffs: {
        staff: "/wp-json/timetics/v1/staffs",
        search: "/wp-json/timetics/v1/staffs/search"
    },
    bookings: {
        booking: "/wp-json/timetics/v1/bookings",
        search: "/wp-json/timetics/v1/bookings/search",
        slots: "wp-json/timetics/v1/bookings/entries",
        updatePaymentStatus: "/wp-json/timetics/v1/bookings/:bookingId/payment",
        paymentOptions: "/wp-json/timetics/v1/bookings/payment_methods"
    },
    customers: {
        customers: "/wp-json/timetics/v1/customers",
        search: "/wp-json/timetics/v1/customers/search",
        singleCustomer: "/wp-json/timetics/v1/customers"
    },
    overview: {
        overview: "/wp-json/timetics/v1/reports/overview"
    },
    payment: {
        stripe: "/wp-json/timetics/v1/stripe/payment",
        woocommerce: "/wp-json/timetics/v1/woocommerce/cart"
    },
    settings: {
        settings: "/wp-json/timetics/v1/settings",
        business: "/wp-json/timetics/v1/settings/business"
    }
};

//# sourceURL=webpack://timetics/./assets/src/admin/services/apiEndPoints.js?