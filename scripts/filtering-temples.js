document.addEventListener('DOMContentLoaded', () => {
    const templeGrid = document.querySelector('.temple-grid');
    const navLinks = document.querySelectorAll('nav a');
    
    /**
     * Renders all temples to the page by iterating through the temples array and 
     * calling the createTempleCard function for each temple.
     */
    function displayAllTemples() {
        templeGrid.innerHTML = '';
        temples.forEach(temple => {
            createTempleCard(temple);
        });
    }
    
    /**
     * Renders a single temple to the page by creating an HTML element (a div with class 'temple-card')
     * and setting its inner HTML to the desired card content. The card content is an image, a heading for the temple
     * name, and three paragraphs for the location, dedication date, and area of the temple. The card is then appended
     * to the .temple-grid element.
     * @param {object} temple - The object containing the details of the temple to render.
     */
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        
        templeGrid.appendChild(card);
    }

    /**
     * Renders only the temples that were dedicated before 1900 to the page. It iterates
     * through the temples array and calls the createTempleCard function for each temple
     * with a dedication year before 1900. It clears any existing content in the .temple-grid
     * element before doing so.
     */
    function filterOldTemples() {
        templeGrid.innerHTML = '';
        temples.forEach(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            if (year < 1900) {
                createTempleCard(temple);
            }
        });
    }

    /**
     * Renders only the temples that were dedicated after 2000 to the page. It iterates
     * through the temples array and calls the createTempleCard function for each temple
     * with a dedication year after 2000. It clears any existing content in the .temple-grid
     * element before doing so.
     */
    function filterNewTemples() {
        templeGrid.innerHTML = '';
        temples.forEach(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            if (year > 2000) {
                createTempleCard(temple);
            }
        });
    }

    /**
     * Renders only the temples that are larger than 90,000 sq ft to the page. It iterates
     * through the temples array and calls the createTempleCard function for each temple
     * with an area larger than 90,000 sq ft. It clears any existing content in the .temple-grid
     * element before doing so.
     */
    function filterLargeTemples() {
        templeGrid.innerHTML = '';
        temples.forEach(temple => {
            if (temple.area > 90000) {
                createTempleCard(temple);
            }
        });
    }
    
/**
 * Renders only the temples that are smaller than 10,000 sq ft to the page. It iterates
 * through the temples array and calls the createTempleCard function for each temple
 * with an area smaller than 10,000 sq ft. It clears any existing content in the .temple-grid
 * element before doing so.
 */

    function filterSmallTemples() {
        templeGrid.innerHTML = '';
        temples.forEach(temple => {
            if (temple.area < 10000) {
                createTempleCard(temple);
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            
            link.classList.add('active');
            
            const linkText = link.textContent.trim();
            
            switch(linkText) {
                case 'Old':
                    filterOldTemples();
                    break;
                case 'New':
                    filterNewTemples();
                    break;
                case 'Large':
                    filterLargeTemples();
                    break;
                case 'Small':
                    filterSmallTemples();
                    break;
                case 'Home':
                default:
                    displayAllTemples();
                    break;
            }
        });
    });
    
    displayAllTemples();
});