const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    console.log("installing");
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    // see the prompt
    promptEvent.prompt();
    window.deferredPrompt = null;
    // hide the button
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    console.log("The Jate application is now installed");
    window.deferredPrompt = null;
});
