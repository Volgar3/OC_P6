export function displayToast(message) {
    const toastLiveExample = document.getElementById('liveToast');
    const toastBody = toastLiveExample.querySelector('.toast-body');
    if (toastBody && message) {
        toastBody.textContent = message;
    }

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}