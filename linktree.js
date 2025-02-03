
        // Background image upload
        document.getElementById('bg-upload').addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.onload = function() {
                document.body.style.backgroundImage = `url(${reader.result})`;
            }
            reader.readAsDataURL(e.target.files[0]);
        });

        // Social media icon mapping
        const iconMap = {
            'facebook.com': 'fab fa-facebook',
            'twitter.com': 'fab fa-twitter',
            'instagram.com': 'fab fa-instagram',
            'linkedin.com': 'fab fa-linkedin',
            'youtube.com': 'fab fa-youtube',
            'github.com': 'fab fa-github',
            'default': 'fas fa-link'
        };

        function getIconClass(url) {
            for (const domain in iconMap) {
                if (url.includes(domain)) {
                    return iconMap[domain];
                }
            }
            return iconMap['default'];
        }

        function createLinkElement() {
            const linkDiv = document.createElement('div');
            linkDiv.className = 'link-item';
            linkDiv.innerHTML = `
                <input type="color" class="icon-color" value="#000000">
                <input type="text" class="link-url" placeholder="Enter URL">
                <i class="icon"></i>
                <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
            `;

            const urlInput = linkDiv.querySelector('.link-url');
            const colorInput = linkDiv.querySelector('.icon-color');
            const icon = linkDiv.querySelector('.icon');

            urlInput.addEventListener('input', function() {
                icon.className = getIconClass(this.value);
                icon.style.color = colorInput.value;
            });

            colorInput.addEventListener('input', function() {
                icon.style.color = this.value;
            });

            return linkDiv;
        }

        function addNewLink() {
            const linksContainer = document.getElementById('links-container');
            linksContainer.appendChild(createLinkElement());
        }

        // Add initial link
        addNewLink();