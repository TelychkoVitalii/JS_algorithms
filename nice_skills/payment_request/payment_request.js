var checkoutButton = document.getElementById('checkout-button'),
    introPanel = document.getElementById('intro'),
    successPanel = document.getElementById('success'),
    legacyPanel = document.getElementById('legacy');

if(window.PaymentRequest) {
    checkoutButton.addEventListener('click', function () {
        var request = new PaymentRequest(buildSupportedPaymentMethodData(), buildShoppingCartDetails());
        request.show()
            .then(function (paymentResponse) {
                paymentResponse.complete('success');
            })
            .then(function () {
                introPanel.style.display = 'none';
                successPanel.style.display = 'block';
            })
            .catch(function (error) {
                introPanel.style.display = 'none';
                legacyPanel.style.display = 'block';
            })
    })
} else {
    checkoutButton.addEventListener('click', function() {
        introPanel.style.display = 'none';
        legacyPanel.style.display = 'block';
    });
}

function buildSupportedPaymentMethodData() {
    return [{
        supportedMethods: 'basic-card',
        data: {
            supportedNetworks: ['visa', 'mastercard'],
            supportedTypes: ['debit', 'credit']
        }
    }];
}

function buildShoppingCartDetails() {
    return {
        id: 'order-123',
        displayItems: [{
            label: 'Example item',
            amount: {currency: 'USD', value: '5.00'}
        }],
        total: {
            label: 'Total',
            amount: {currency: 'USD', value: '5.00'}
        }
    }
}