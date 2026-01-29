let cookies = 0;
        let cps = 0;
        
        // Klick Cookie
        document.getElementById('cookie').onclick = () => {
            cookies = cookies + 1;
            document.getElementById('count').innerText = Math.floor(cookies) + " Cookies";
        };
        
        // Klick Oma oder Cursor
        function buy(cost, proSekunde) {
            if (cookies >= cost) {
                cookies = cookies - cost;
                cps = cps + proSekunde;
                document.getElementById('count').innerText = Math.floor(cookies) + " Cookies";
            }
        }
        
        // Alle 1000ms = 1 Sekunde
        setInterval(() => {
            cookies = cookies + cps;
            document.getElementById('count').innerText = Math.floor(cookies) + " Cookies";
        }, 1000);
