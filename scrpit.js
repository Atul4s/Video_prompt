
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-bg');
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    const muteToggle = document.getElementById('mute-toggle');

    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if(progress >= 100){ progress = 100; clearInterval(interval); }
        progressBar.style.width = progress + "%";
    }, 200);

    video.addEventListener('canplaythrough', () => {
        setTimeout(() => { 
            loader.style.opacity = '0'; 
            setTimeout(() => loader.style.display = 'none', 500);
        }, 500);
    });
    

    muteToggle.addEventListener('click', () => {
        video.muted = !video.muted;
        muteToggle.classList.toggle('muted', video.muted);
        muteToggle.classList.toggle('unmuted', !video.muted);
    });
});
