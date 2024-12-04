// Function to display packages dynamically
function displayPackages() {
    const packages = [
        { name: "💎 25 Diamonds", price: "৳ 25" },
        { name: "💎 50 Diamonds", price: "৳ 39" },
        { name: "💎 115 Diamonds", price: "৳ 77" },
        { name: "💎 240 Diamonds", price: "৳ 152" },
        { name: "💎 355 Diamonds", price: "৳ 234" },
        { name: "💎 505 Diamonds", price: "৳ 337" },
        { name: "💎 610 Diamonds", price: "৳ 377" },
        { name: "💎 850 Diamonds", price: "৳ 522" },
        { name: "💎 1090 Diamonds", price: "৳ 677" },
        { name: "💎 1240 Diamonds", price: "৳ 747" },
        { name: "💎 1850 Diamonds", price: "৳ 1,112" },
        { name: "💎 2530 Diamonds", price: "৳ 1,522" },
        { name: "💎 5060 Diamonds", price: "৳ 3,032" },
        { name: "💎 10120 Diamonds", price: "৳ 6,102" }
    ];

    const packagesList = document.getElementById('packagesList');
    packagesList.innerHTML = packages.map(pkg => {
        return `
            <div class="package">
                <h3>${pkg.name}</h3>
                <p>Price: ${pkg.price}</p>
                <button onclick="topUpDiamonds(${pkg.price})">Top-Up</button>
            </div>
        `;
    }).join('');
}

// Function to handle the top-up action
function topUpDiamonds(amount) {
    alert(`Top-Up Successful! Amount: ${amount} Diamonds.`);
}

// Function to open Messenger
function openMessenger() {
    window.open('https://m.me/scientist.hasan001', '_blank');
}

// Function to open WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/017801824588', '_blank');
}

// Function to initiate bKash payment
function initiateBkashPayment() {
    alert("Redirecting to bKash for payment.");
}

// Call the displayPackages function on page load
window.onload = displayPackages;
