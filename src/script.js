document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const status = document.getElementById('status');
    status.textContent = 'Verzenden...';

    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        // Vervang deze URL door je eigen Formspree URL
        const response = await fetch('https://formspree.io/f/yourformid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            status.textContent = 'Bedankt voor je bericht!';
            e.target.reset();
        } else {
            status.textContent = 'Er ging iets mis. Probeer opnieuw.';
        }
    } catch (error) {
        status.textContent = 'Netwerkfout. Probeer opnieuw.';
    }
});
