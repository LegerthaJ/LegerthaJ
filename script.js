<script>
        const nextButton = document.getElementById('next-fact-button');
        const prevButton = document.getElementById('previous-fact-button');
        let currentFact = 1; // Start with fun fact 1
        // Function to show the selected fact
        function showFact(factNumber) {
        // Remove 'active' from all fact containers
        const factContainers = document.querySelectorAll('.fact-container');
        factContainers.forEach(container => container.classList.remove('active'));
        // Add 'active' to the selected fact container
        document.querySelector(`.fact-container.fact${factNumber}`).classList.add('active');
        // Update the currentFact
        currentFact = factNumber;
        }
        // Event listener for the Next button
        nextButton.addEventListener('click', () => {
        showFact((currentFact % 5) + 1); // Cycle back to 1 after fact 5
        });
        // Event listener for the Previous button
        prevButton.addEventListener('click', () => {
        showFact(currentFact === 1 ? 5 : currentFact - 1); // Cycle back to 5 before fact 1
        });
        // Initial setup: Show the first fact
        showFact(currentFact);
    </script>